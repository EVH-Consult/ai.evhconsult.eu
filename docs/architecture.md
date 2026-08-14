# Architectural principles

This document records the initial architectural direction for `ai.evhconsult.eu`. It does not lock the project into a detailed implementation or a specific technology stack.

## Separation of concerns

The architecture should maintain clear boundaries between:

- the frontend;
- backend and API functionality;
- AI providers and provider-specific integrations;
- data storage;
- authentication and authorization.

These boundaries should make individual components easier to evolve, replace, secure, and test.

## Operating principles

- Prefer managed services over maintaining virtual machines when they meet the project's requirements.
- Preserve portability where reasonable, especially around AI-provider integrations and application logic.
- Keep secrets, credentials, tokens, keys, and connection strings outside source control.
- Keep the public domain stable even if the underlying hosting platform or backend changes.
- Split public and private components into separate repositories later if security, operational, or product requirements justify it.
- Avoid coupling public code to private Ada context or confidential EVH Consult information.

## Current website implementation

The first public website is a statically exported Next.js application in `src/web`. Static output keeps the first deployment simple and portable. Analytics is injected only when public deployment settings provide a domain and script URL; no tracking identifier is hard-coded.

This implementation does not determine the future backend architecture.

## Likely evolution

The current likely path is:

1. A static public site.
2. A static site with serverless or API functionality.
3. A potential dedicated backend using Azure App Service, Azure Container Apps, or another appropriate managed platform.

This path is a direction for exploration, not a locked architectural decision. Actual requirements, security considerations, operating cost, maintainability, and portability will determine the implementation.
