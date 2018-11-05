# wrapped-analytics

Small wrapper for external analytics scripts, made for embeddable widgets. It detects installed web analytics scripts and provides unified API for reporting events from your widget.

### Install

```bash
$ npm install --save wrapped-analytics
```

### Usage

```js
import {
  wrappedAnalytics,
  googleGA,
  googleGTAG,
} from 'wrapped-analytics';

const trackEvent = wrappedAnalytics([
  googleGA,
  googleGTAG,
]);

trackEvent('subscribe', {
  category: 'subscriptionForms',
  label: 'newsletter',
});
```

#### API Reference

All adapters have same API:
```js
trackEvent(
  event,            // Event to track (string)
  eventProperties,  // Optional event properties
);

// Each field here is optional too
eventProperties = {
  category, 
  label,
  value,
};
```

`wrappedAnalytics` accepts list of adapters and produce a single `trackEvent` function which passes data to each of registered adapters.

### Browser support

IE9+
