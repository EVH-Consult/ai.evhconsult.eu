# Privacy and data-handling principles

This document records the public privacy and data-handling principles for `ai.evhconsult.eu`. Detailed website analytics and cookie information is maintained centrally for the EVH Consult web ecosystem at [evhconsult.eu/privacy.html](https://evhconsult.eu/privacy.html).

## Principles

- Minimize the collection, processing, and retention of personal and other sensitive data.
- Never commit secrets, credentials, tokens, keys, connection strings, or private authentication material to GitHub.
- Never place client-confidential information or private Ada context in this public repository.
- Be transparent when AI services are used and when their use materially affects an interaction or output.
- Keep humans responsible for consequential decisions; AI output should not be treated as autonomous authority.
- Document specific external AI providers and their processing arrangements before using them in production.
- Evaluate privacy and security requirements before introducing user accounts, document uploads, persistent conversations, or client data.

## Website analytics

`ai.evhconsult.eu` participates in the shared EVH Consult Google Analytics 4 architecture together with `evhconsult.eu`, `ada.evhconsult.eu`, and `erwin.evhconsult.eu`.

Analytics is optional and treated as non-essential:

- Google Analytics must not load or send requests before explicit analytics consent.
- Refusing analytics must not affect access to the site.
- The same consent choice is shared across `*.evhconsult.eu` using a strictly functional preference cookie retained for no more than six months.
- Advertising-related consent states remain denied; this implementation is not used for advertising personalisation or remarketing.
- Google Signals and User-ID are not used.

After consent, measurement is limited to website/content effectiveness, regional/campaign effectiveness and successful contact-request measurement. EVH Consult must not intentionally send names, email addresses, phone numbers, message text, form-field values, CRM identifiers, hashed personal identifiers or another first-party identity to GA4.

Approximate regional/city and device/browser reporting is enabled for legitimate campaign and market analysis. It is used directionally and must not be treated as precise physical-location evidence about an individual visitor.

GA4 event/user-level data is retained for 14 months. EVH Consult-controlled GA first-party cookies are configured for no more than 13 months from first creation.

The implementation uses Google Consent Mode Basic: analytics remains denied until the visitor explicitly accepts it, and no pre-consent Google Analytics request is permitted.

See [analytics.md](analytics.md) for the implementation boundary and the central [Privacy & cookie information](https://evhconsult.eu/privacy.html) for the visitor-facing notice.

## Hosting metrics

Azure Static Web Apps may still produce aggregate operational metrics as part of hosting, including site hits, outgoing bytes and service errors. These hosting counters are operational telemetry rather than the optional GA4 audience measurement described above.

Any material expansion of analytics, advertising use, identity handling, retention, or data-processing purpose requires a new privacy/architecture decision before activation.
