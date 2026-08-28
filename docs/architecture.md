# Architectural principles

This document records the architectural direction for `ai.evhconsult.eu`. It does not lock the project into unnecessary implementation detail or a specific AI provider.

## Current deployment

The public site is live at `https://ai.evhconsult.eu` and is deployed through Azure Static Web Apps from the `main` branch.

The current application is a statically exported Next.js site in `src/web`. Static delivery remains the appropriate baseline while the public platform does not require backend state.

## Separation of concerns

Future capabilities should maintain clear boundaries between:

- the frontend;
- backend and API functionality;
- AI providers and provider-specific integrations;
- data storage;
- authentication and authorization.

These boundaries exist to keep components easier to evolve, replace, secure, and test. They are not a reason to introduce distributed-system complexity before requirements justify it.

## Operating principles

- Prefer managed services over maintaining virtual machines when they meet the requirements.
- Preserve portability where reasonable, especially around AI-provider integrations and application logic.
- Keep secrets, credentials, tokens, keys, and connection strings outside source control.
- Keep the public domain stable even if the underlying hosting platform or backend changes.
- Keep the public repository separated from private Ada context and confidential EVH Consult/client information.
- Add backend/API, storage, authentication, uploads, or persistent user data only for concrete requirements.
- Reassess privacy and security before introducing accounts, uploads, persistent conversations, or client-data processing.

## Web ecosystem boundary

`ai.evhconsult.eu` is one of four distinct EVH Consult public properties:

- `evhconsult.eu` — consulting/business presence;
- `ai.evhconsult.eu` — AI/R&D and exploratory technical work;
- `ada.evhconsult.eu` — Ada's public identity/home;
- `erwin.evhconsult.eu` — Erwin Vanhecke's personal/professional public presence.

The sites share cross-site conventions for branding, typography, navigation behaviour, and accessibility where appropriate, but remain independently deployable and retain separate canonical source repositories.

## Shared contact and navigation convention

Business contact is centralised at `https://evhconsult.eu/contact.html`. The only visitor-facing contact actions are the header Contact CTA and footer Contact text link; both pass the caller hostname in `source` and route path in `path`. No general-business `mailto:` action is retained on this site. The header Contact CTA uses the main-site geometry (92px × 42px, 4px radius) and the established responsive navigation behaviour. EVHC-59 wake-check invocation will be added only after its shared backend endpoint and telemetry contract are deployed; browser code must never obtain database credentials or direct SQL access.

## Repository and work-management boundaries

- This repository is authoritative for the AI/R&D website implementation and public technical documentation.
- Jira project `EVHC` tracks concrete work; `EVHC-4` is the current AI/R&D public-platform workstream.
- Confluence records durable architecture and design rationale.
- Ada's public identity and private persistent context remain in `EVHConsult-AI/ada` and `EVHConsult-AI/ada-context` respectively.

## Likely evolution

The current likely path remains:

1. Static public site.
2. Static site plus narrowly scoped serverless/API functionality where needed.
3. A dedicated backend only if requirements, security, operating cost, maintainability, and deployment characteristics justify one.

This is a direction, not a commitment to increasing architectural complexity.
