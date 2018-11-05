export interface EventTracker {
  (event: string, eventProperties?: EventProperties): void;
}

export interface EventProperties {
  category?: string;
  label?: string;
  value?: string;
}

export function wrappedAnalytics(trackers: EventTracker[]): EventTracker {
  if (trackers.length === 0) {
    throw new Error("Can't create wrappedAnalytics: no adapters given");
  }

  return (event: string, eventProperties?: EventProperties): void => {
    trackers.forEach(track => track(event, eventProperties));
  };
}
