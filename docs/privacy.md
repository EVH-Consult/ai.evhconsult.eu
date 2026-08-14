# Privacy and data-handling principles

This document states the initial public privacy and data-handling principles for `ai.evhconsult.eu`. It is not a complete legal privacy policy. A formal policy will be prepared when the service's functionality and processing activities require one.

## Principles

- Minimize the collection, processing, and retention of personal and other sensitive data.
- Never commit secrets, credentials, tokens, keys, connection strings, or private authentication material to GitHub.
- Never place client-confidential information or private Ada context in this public repository.
- Be transparent when AI services are used and when their use materially affects an interaction or output.
- Keep humans responsible for consequential decisions; AI output should not be treated as autonomous authority.
- Document specific external AI providers and their processing arrangements before using them in production.
- Evaluate privacy and security requirements before introducing user accounts, document uploads, persistent conversations, or client data.

## Audience measurement

The website is prepared for minimal, cookie-free audience measurement. The intended scope is aggregate page views, referral sources, broad device classes, and country-level geography. It excludes advertising identifiers, cross-site profiles, keystroke capture, document contents, and persistent visitor histories.

The initial recommended provider is Plausible Analytics because its hosted service is EU-based, does not use cookies or persistent identifiers, and states that raw IP addresses and User-Agent values are not stored. Provider configuration and the final production data-handling assessment must be completed before tracking is enabled.

See [`analytics.md`](analytics.md) for implementation details.

Any future implementation should apply privacy and security controls proportionate to the data involved and the risks created by the service.
