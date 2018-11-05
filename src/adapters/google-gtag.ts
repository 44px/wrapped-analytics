import { EventProperties, EventTracker } from '../wrapped-analytics';

// gtag function signature:
// gtag('event', <action>, {
//   'event_category': <category>,
//   'event_label': <label>,
//   'value': <value>
// });
// see https://developers.google.com/analytics/devguides/collection/gtagjs/events#send_events
export interface GTAG {
  (
    type: string,
    eventAction: string,
    eventProperties?: {
      event_category?: string;
      event_label?: string;
      value?: string;
    },
  ): void;
}

declare global {
  interface Window {
    gtag?: GTAG;
  }
}

export const googleGTAG: EventTracker = (
  event: string,
  eventProperties?: EventProperties,
): void => {
  const gtag = window.gtag;
  if (!gtag) {
    return;
  }

  const { category, label, value } = eventProperties || ({} as EventProperties);
  gtag('event', event, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
