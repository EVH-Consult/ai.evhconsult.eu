# Minimal service measurement

## Current decision

The project does not use a dedicated audience-analytics provider.

No client-side analytics script, tracking token, advertising identifier, session replay or audience-measurement cookie is included in the production website.

## Available measurement

Azure Static Web Apps already produces aggregate operational metrics as part of hosting the site. The relevant counters are:

- `SiteHits`: requests reaching the website;
- `BytesSent`: outgoing traffic volume;
- `SiteErrors`: website errors.

They can be viewed in the Azure portal under the Static Web App's monitoring metrics.

## Limitations

A site hit is not the same as a person or a page view. Requests for assets, automated traffic and repeat requests can contribute to the count. These metrics do not show unique visitors, referral sources, browser or device classes, geography, journeys or conversions.

That limitation is intentional for the initial site: it provides a basic indication of use and service health without introducing another processor, account, subscription or browser-side tracking mechanism.

## Future changes

Before adding any external analytics service, document:

1. why the additional information is necessary;
2. the provider and processing location;
3. retention and deletion arrangements;
4. cookies, identifiers and browser-side data sent;
5. cost and operational dependency;
6. the required changes to the public privacy information.
