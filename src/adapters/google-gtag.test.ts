import { googleGTAG, GTAG } from './google-gtag';

declare global {
  namespace NodeJS {
    interface Global {
      gtag?: GTAG;
    }
  }
}

describe('googleGTAG', () => {
  it('does nothing if Google Global Site Tag function not found', () => {
    expect(() => {
      googleGTAG('test');
    }).not.toThrow();
  });

  it('maps event only', () => {
    global.gtag = jest.fn();

    googleGTAG('testEvent');

    expect(global.gtag).toBeCalledWith('event', 'testEvent', {
      event_category: undefined,
      event_label: undefined,
      value: undefined,
    });
  });

  it('maps event and its properties', () => {
    global.gtag = jest.fn();

    googleGTAG('testEvent', {
      category: 'testCategory',
      label: 'testLabel',
      value: 'testValue',
    });

    expect(global.gtag).toBeCalledWith('event', 'testEvent', {
      event_category: 'testCategory',
      event_label: 'testLabel',
      value: 'testValue',
    });
  });
});
