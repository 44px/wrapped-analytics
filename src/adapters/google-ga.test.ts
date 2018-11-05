import { GA, googleGA } from './google-ga';

declare global {
  namespace NodeJS {
    interface Global {
      ga?: GA;
    }
  }
}

describe('googleGA', () => {
  it('does nothing if Google Analytics function not found', () => {
    expect(() => {
      googleGA('test');
    }).not.toThrow();
  });

  it('maps event only', () => {
    global.ga = jest.fn();

    googleGA('testEvent');

    expect(global.ga).toBeCalledWith('send', 'event', undefined, 'testEvent', undefined, undefined);
  });

  it('maps event and its properties', () => {
    global.ga = jest.fn();

    googleGA('testEvent', {
      category: 'testCategory',
      label: 'testLabel',
      value: 'testValue',
    });

    expect(global.ga).toBeCalledWith(
      'send',
      'event',
      'testCategory',
      'testEvent',
      'testLabel',
      'testValue',
    );
  });
});
