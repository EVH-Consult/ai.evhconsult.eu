# Minimal audience measurement

The website supports optional, privacy-friendly audience measurement. Tracking remains disabled unless deployment settings provide both the analytics domain and script URL.

## Intended initial provider

The initial recommendation is Plausible Analytics:

- hosted in the EU;
- no analytics cookies;
- no persistent visitor identifier;
- aggregate traffic reporting;
- open-source software and a documented data policy.

This is a recommendation, not an architectural dependency. The integration is configured through environment variables and can be replaced or removed without changing the page content.

## Configuration

Set these public build-time values in the deployment environment:

```text
NEXT_PUBLIC_ANALYTICS_DOMAIN=ai.evhconsult.eu
NEXT_PUBLIC_ANALYTICS_SCRIPT=https://plausible.io/js/script.js
```

The domain must first be registered in the selected analytics service. Do not add account credentials, API keys, or private tokens to the repository.

## Measurement boundaries

The initial configuration should measure only:

- page views;
- entry and exit pages;
- referral-source categories;
- broad browser, operating-system, and device classes;
- country-level geography.

Do not enable session replay, advertising integration, cross-site tracking, document-content capture, or user-level profiles.

## Production checklist

Before enabling analytics:

1. Confirm the provider, account owner, hosting region, retention settings, and applicable processing terms.
2. Verify that the public privacy information matches the actual configuration.
3. Configure internal-traffic exclusion where practical.
4. Confirm the production page sends events only to the documented endpoint.
5. Review the arrangement again before adding accounts, uploads, conversations, or client data.
