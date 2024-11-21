type Callback = (...args: unknown[]) => void;

interface IEventEmitter<T extends string> {
  on: (e: T, cb: Callback | Array<Callback>) => void;
  off: (e: T, cb: Callback | Array<Callback>) => void;
  emit: (e: T) => void;
}

export class EventEmitter<T extends string> implements IEventEmitter<T> {
  private events: Partial<Record<T, Set<Callback>>> = {};

  on = (event: T, cbs: Callback | Array<Callback>) => {
    const arrayedCbs = Array.isArray(cbs) ? cbs : [cbs];
    if (event in this.events) {
      arrayedCbs.forEach((cb) => {
        this.events[event]!.add(cb);
      });
    } else {
      this.events[event] = new Set(arrayedCbs);
    }
  };

  off = (event: T, cbs: Callback | Array<Callback>) => {
    const arrayedCbs = Array.isArray(cbs) ? cbs : [cbs];
    if (!(event in this.events)) {
      throw new Error(`Nothing to unsubscribe from. Event: ${event}`);
    }
    arrayedCbs.forEach((cb) => {
      this.events[event]!.delete(cb);
    });
  };

  emit = (event: T, ...args: unknown[]) => {
    if (!this.events[event]) {
      throw new Error(`Event ${event} not registred`);
    }

    this.events[event]!.forEach((cb) => cb(...args));
  };
}
