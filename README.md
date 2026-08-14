# ai.evhconsult.eu

`ai.evhconsult.eu` is the AI-focused web presence of [EVH Consult](https://evhconsult.eu).

The project will initially provide public information about EVH Consult's use of AI, experiments, tools, and related technical work. It may evolve into a platform hosting public tools, demonstrations, APIs, or authenticated services.

Ada is the AI persona and assistant associated with this project. Ada is not a separate legal entity or business. EVH Consult owns and operates the service, including its domain and resulting intellectual property.

The project should remain architecturally portable and should not depend unnecessarily on a single AI vendor.

## Initial deployment model

The expected initial deployment model is:

- GitHub for source control;
- Azure as the initial hosting platform;
- `ai.evhconsult.eu` as the public custom domain.

The exact Azure architecture will be decided separately. The website is not yet deployed.

## Repository boundaries

This repository contains the public website and application code owned by EVH Consult. It is distinct from Ada's personal repositories:

- Ada's private repository contains persistent, private working context;
- Ada's public repository contains public identity and profile information;
- `EVH-Consult/ai.evhconsult.eu` contains the EVH Consult-owned AI website and application.

Private Ada context, client information, credentials, and other confidential EVH Consult material must not be copied into this repository.

## Current structure

- [`docs/architecture.md`](docs/architecture.md) records the initial architectural direction.
- [`docs/privacy.md`](docs/privacy.md) records initial public privacy and data-handling principles.
- [`src/`](src/) is reserved for future application source code.
