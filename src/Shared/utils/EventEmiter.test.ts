import { EventEmitter } from '@shared/utils/EventEmitter';
import expect from 'expect';

describe('EventEmiter', () => {
  it('should contain all subscribed events', () => {
    const ee = new EventEmitter<'event 1' | 'event 2' | 'event 3'>();
    const [cb1, cb2, cb3] = new Array(3).fill(jest.fn).map((fn) => fn());

    ee.on('event 1', cb1);
    ee.on('event 2', cb2);
    ee.on('event 3', cb3);
    // eslint-disable-next-line
    expect(ee['events']['event 1']).toEqual(new Set([cb1]));
    // eslint-disable-next-line
    expect(ee['events']['event 2']).toEqual(new Set([cb2]));
    // eslint-disable-next-line
    expect(ee['events']['event 3']).toEqual(new Set([cb3]));
  });
  it('should collapse duplicated cbcs', () => {
    const ee = new EventEmitter<'event 1'>();
    const cb1 = jest.fn();
    ee.on('event 1', [cb1, cb1, cb1]);
    // eslint-disable-next-line
    expect(ee['events']['event 1']).toEqual(new Set([cb1]));
  });
  it('should delete nessecary events', () => {
    const ee = new EventEmitter<'event 1'>();
    const cb1 = jest.fn();
    const cb2 = jest.fn();
    ee.on('event 1', [cb1, cb2]);
    // eslint-disable-next-line
    expect(ee['events']['event 1']).toEqual(new Set([cb1, cb2]));

    ee.off('event 1', [cb2]);

    // eslint-disable-next-line
    expect(ee['events']['event 1']).toEqual(new Set([cb1]));
  });
  it('should emit all events', () => {
    const ee = new EventEmitter<'event 1'>();
    const callbacs = new Array(3).fill(jest.fn).map((fn) => fn());
    ee.on('event 1', callbacs);
    expect(callbacs).toHaveLength(3);
    ee.emit('event 1');
    callbacs.forEach((cb) => {
      expect(cb).toBeCalled();
    });
  });
});
