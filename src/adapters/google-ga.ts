import { EventProperties, EventTracker } from '../wrapped-analytics';

// ga function signature:
// ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
// see https://developers.google.com/analytics/devguides/collection/analyticsjs/events#implementation
export interface GA {
  (
    method: string,
    type: string,
    eventCategory?: string,
    eventAction?: string,
    eventLabel?: string,
    eventValue?: string,
    fieldsObject?: any,
  ): void;
}

declare global {
  interface Window {
    ga?: GA;
  }
}

export const googleGA: EventTracker = (event: string, eventProperties?: EventProperties): void => {
  const ga = window.ga;
  if (!ga) {
    return;
  }

  const { category, label, value } = eventProperties || ({} as EventProperties);
  ga('send', 'event', category, event, label, value);
};
