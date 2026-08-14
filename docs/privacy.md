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

## Basic service measurement

No dedicated audience-analytics provider or client-side analytics script is enabled.

The project uses only the aggregate operational metrics already produced by Azure Static Web Apps as the hosting platform:

- total site hits;
- outgoing bytes;
- site errors.

These counters help determine whether the site is being reached and operating normally. They are request-level service metrics, not a count of unique people, and they do not provide referral sources, device profiles or visitor-level histories.

No audience-measurement cookies are set by this project. No separate analytics account receives the website's traffic data.

See [`analytics.md`](analytics.md) for implementation details and limitations.

Any future expansion of measurement must be documented and evaluated before activation. This is especially important before adding accounts, uploads, conversations or client data.
