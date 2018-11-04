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
  yandexMetrica
} from 'wrapped-analytics';

const analytics = wrappedAnalytics([
    googleGA,
    googleGTAG,
    yandexMetrica
]);

analytics.trackEvent('MyEvent', {value: 1});
```

#### API Reference

Basically, there is only one API method available: `trackEvent`

### Browser support

TODO
