# Website analytics

## Current architecture

`ai.evhconsult.eu` participates in the shared EVH Consult Google Analytics 4 architecture together with `evhconsult.eu`, `ada.evhconsult.eu`, and `erwin.evhconsult.eu`.

The four sites use one GA4 property and one web data stream. The same measurement ID is used across the canonical production hostnames and reporting can be segmented by hostname.

The analytics purpose is deliberately limited to:

- aggregate website and content usage;
- regional/campaign effectiveness;
- successful contact-request measurement without sending contact-form contents to GA4.

The configuration is measurement-only. Google Signals, User-ID, advertising personalisation, remarketing and Google Ads linking are outside the approved implementation.

## Consent boundary

Analytics is non-essential and requires prior consent. The site therefore uses Google Consent Mode Basic rather than Advanced mode.

Before explicit analytics consent:

- `analytics_storage` is denied;
- advertising-related consent states are denied;
- the Google Analytics tag must not load;
- no Analytics request may be sent to Google.

The consent preference is shared across `*.evhconsult.eu` using a strictly functional cookie retained for no more than six months. Refusing analytics does not affect site functionality. A persistent Cookie settings control allows the visitor to change or withdraw consent.

On withdrawal the consent state is changed back to denied, future collection is disabled immediately, and EVH Consult-controlled `_ga` cookies are removed where technically feasible.

## Implementation ownership

The analytics work is deliberately split across Jira items:

- **EVHC-65** — consent state, consent UI and privacy/cookie information;
- **EVHC-66** — GA4 tag and event integration, using the EVHC-65 consent state rather than bypassing it;
- **EVHC-67** — production deployment and verification, including proving that no Google Analytics request occurs before consent or after refusal.

The EVHC-65 browser-side consent layer exposes `window.EVHConsent` so the later GA4 loader can determine whether analytics consent is currently granted and can react to the `evh:analytics-consent-changed` event.

No code in this repository should independently load GA4 outside that consent gate.

## Data minimisation

After consent, allowed measurement can include page views, session events, scrolls, outbound clicks, file downloads and an explicit successful contact-request event where applicable.

Do not send names, email addresses, telephone numbers, message text, form-field contents, CRM identifiers, User-ID, hashed personal identifiers or other custom identifiers that identify or single out a person.

Approximate region/city and device/browser information may be collected for campaign and market analysis. Geographic reporting is directional and must not be treated as precise physical-location evidence about a visitor.

## Retention

GA4 event/user-level retention is 14 months with reset-on-new-activity disabled. EVH Consult-controlled GA first-party cookies are configured for no more than 13 months from first creation.

## Hosting metrics

Azure Static Web Apps also produces hosting-level operational metrics such as `SiteHits`, `BytesSent` and `SiteErrors`. Those counters remain useful for service operations but are distinct from the consent-gated GA4 measurement described above.

See [privacy.md](privacy.md) and the shared public [Privacy & cookie information](https://evhconsult.eu/privacy.html).
