# ai.evhconsult.eu

`ai.evhconsult.eu` is the public AI/R&D presence of [EVH Consult](https://evhconsult.eu).

It is the place for AI-related experiments, tools, research, prototypes, and exploratory technical work. Experimental work should be described according to its actual maturity and must not be presented as a production product or established consulting capability without evidence that it has reached that state.

Ada is the AI persona and assistant of EVH Consult and may contribute to work published here. Ada is not a separate legal entity or business, and her public identity and private working context remain in separate Ada-owned repositories.

The project should remain architecturally portable and should not depend unnecessarily on a single AI vendor or hosting platform.

## Website

The production site is live at [ai.evhconsult.eu](https://ai.evhconsult.eu).

The current implementation is a statically exported Next.js application in [`src/web`](src/web), deployed through Azure Static Web Apps from the `main` branch.

The current public platform is intentionally static. Backend/API functionality, storage, authentication, uploads, persistent conversations, or client-data processing should only be introduced for concrete requirements and require a corresponding privacy/security review.

## Repository boundaries

This repository is the canonical source for the EVH Consult AI/R&D website and related public application code/documentation.

It is distinct from Ada's repositories:

- [`EVHConsult-AI/ada`](https://github.com/EVHConsult-AI/ada) contains Ada's public identity and is the canonical source for `ada.evhconsult.eu`;
- `EVHConsult-AI/ada-context` is Ada's private persistent working-context repository.

Private Ada context, client information, credentials, tokens, keys, connection strings containing secrets, and other confidential EVH Consult material must not be copied into this repository.

## Work and knowledge management

Responsibilities are deliberately separated:

- **GitHub** — implementation, public technical documentation, deployment source, and review history;
- **Jira (`EVHC`)** — planned work, defects, and acceptance criteria; the current platform workstream is `EVHC-4`;
- **Confluence / EVH Consult / AI/R&D** — durable architecture, operating boundaries, and design rationale;
- **Azure** — runtime hosting and environment configuration.

Cross-site branding, navigation, typography, and accessibility conventions are governed by the EVH Consult Web Ecosystem documentation rather than duplicated independently in each repository.

## Current structure

- [`docs/architecture.md`](docs/architecture.md) records the architectural direction.
- [`docs/privacy.md`](docs/privacy.md) records public privacy and data-handling principles.
- [`docs/analytics.md`](docs/analytics.md) explains the minimal analytics approach.
- [`src/web`](src/web) contains the current website source.
