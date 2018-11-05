import { EventProperties, wrappedAnalytics } from './wrapped-analytics';

describe('wrappedAnalytics', () => {
  it('throws error if adapters list is empty', () => {
    expect(() => {
      wrappedAnalytics([]);
    }).toThrow();
  });

  it('calls all adapters', () => {
    const firstAdapter = jest.fn();
    const secondAdapter = jest.fn();
    const event = 'TestEvent';
    const eventProperties: EventProperties = {
      category: 'TestCategory',
      label: 'TestLabel',
      value: 'TestValue',
    };

    const trackEvent = wrappedAnalytics([firstAdapter, secondAdapter]);
    trackEvent(event, eventProperties);

    expect(firstAdapter).toBeCalledWith(event, eventProperties);
    expect(secondAdapter).toBeCalledWith(event, eventProperties);
  });
});
