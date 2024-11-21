interface IEventEmitter<T extends string> {
  on: (e: T, cb: () => void | Array<() => void>) => void;
  off: (e: T, cb: () => void | Array<() => void>) => void;
  emit: (e: T) => void;
}

export class EventEmitter<T extends string> implements IEventEmitter<T> {
  private events: Partial<Record<T, Set<() => void>>> = {};

  on = (event: T, cbs: () => void | Array<() => void>) => {
    const arrayedCbs = Array.isArray(cbs) ? cbs : [cbs];
    if (event in this.events) {
      arrayedCbs.forEach((cb) => {
        this.events[event]!.add(cb);
      });
    } else {
      this.events[event] = new Set(arrayedCbs);
    }
  };

  off = (event: T, cbs: () => void | Array<() => void>) => {
    const arrayedCbs = Array.isArray(cbs) ? cbs : [cbs];
    if (!(event in this.events)) {
      throw new Error(`Nothing to unsubscribe from. Event: ${event}`);
    }
    arrayedCbs.forEach((cb) => {
      this.events[event]!.delete(cb);
    });
  };

  emit = (event: T) => {
    if (!this.events[event]) {
      throw new Error(`Event ${event} not registred`);
    }

    this.events[event]!.forEach((cb) => cb());
  };
}
