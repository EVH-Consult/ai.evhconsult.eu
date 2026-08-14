# ai.evhconsult.eu

`ai.evhconsult.eu` is the AI-focused web presence of [EVH Consult](https://evhconsult.eu).

The project initially provides public information about EVH Consult's use of AI, experiments, tools, and related technical work. It may evolve into a platform hosting public tools, demonstrations, APIs, or authenticated services.

Ada is the AI persona and assistant associated with this project. Ada is not a separate legal entity or business. EVH Consult owns and operates the service, including its domain and resulting intellectual property.

The project should remain architecturally portable and should not depend unnecessarily on a single AI vendor.

## Website

The first mini website is implemented as a statically exported Next.js application in [`src/web`](src/web). It introduces the project, Ada, the working principles, and the site's minimal approach to audience measurement.

The site has been designed and validated, but deployment to `ai.evhconsult.eu` is a separate step.

## Expected deployment model

- GitHub for source control;
- Azure as the initial hosting platform;
- `ai.evhconsult.eu` as the public custom domain.

The exact Azure architecture will be decided separately.

## Repository boundaries

This repository contains the public website and application code owned by EVH Consult. It is distinct from Ada's personal repositories:

- Ada's private repository contains persistent, private working context;
- Ada's public repository contains public identity and profile information;
- `EVH-Consult/ai.evhconsult.eu` contains the EVH Consult-owned AI website and application.

Private Ada context, client information, credentials, and other confidential EVH Consult material must not be copied into this repository.

## Current structure

- [`docs/architecture.md`](docs/architecture.md) records the architectural direction.
- [`docs/privacy.md`](docs/privacy.md) records public privacy and data-handling principles.
- [`docs/analytics.md`](docs/analytics.md) explains the minimal analytics approach.
- [`src/web`](src/web) contains the current website source.
