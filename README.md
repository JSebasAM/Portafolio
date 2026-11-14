# Portafolio

[![Deploy to GitHub Pages](https://github.com/JSebasAM/Portafolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/JSebasAM/Portafolio/actions/workflows/deploy.yml)

Portafolio digital de **José Sebastián Arenas Moncada** (Arquitectura de Software, UCEVA). Presenta el perfil profesional, un catálogo de 5 proyectos y los datos de contacto. Cada proyecto tiene su propio repositorio, pipeline de GitHub Actions y despliegue en GitHub Pages.

**Demo:** https://JSebasAM.github.io/Portafolio/

> Captura de pantalla: pendiente de agregar en `docs/screenshot.png` (`![Captura](docs/screenshot.png)`).

## Tecnologías

- Angular 20 (componentes standalone, signals)
- Routing con `HashLocationStrategy` (compatible con GitHub Pages)
- SCSS propio, sin librerías de UI
- Karma + Jasmine (ChromeHeadless)
- ESLint (`angular-eslint`) y Prettier
- GitHub Actions + GitHub Pages

## Instalación

```bash
npm ci
npm start
```

## Scripts

| Script                 | Descripción                       |
| ---------------------- | --------------------------------- |
| `npm start`            | Servidor de desarrollo            |
| `npm run build`        | Build de producción               |
| `npm test`             | Pruebas unitarias (headless)      |
| `npm run lint`         | ESLint                            |
| `npm run format`       | Prettier (escribe cambios)        |
| `npm run format:check` | Prettier (solo verifica, para CI) |

## Estructura

```
src/app/
├── components/   # project-card, project-catalog, profile-section, contact-section
├── data/         # projects.data.ts (catálogo) y profile.data.ts (perfil)
├── models/       # Interfaces Project y Profile
└── pages/        # home
```

## Agregar o editar proyectos y perfil

- Proyectos: edita [`src/app/data/projects.data.ts`](src/app/data/projects.data.ts).
- Bio, habilidades, lenguajes, tecnologías y contacto: edita [`src/app/data/profile.data.ts`](src/app/data/profile.data.ts). Los campos vacíos se muestran como "pendiente de completar".

## Pipeline

[`deploy.yml`](.github/workflows/deploy.yml) corre en cada push a `master` o manualmente: **build** (lint, formato, pruebas y build con `--base-href "/Portafolio/"`), **deploy** y **verify** (`curl` con reintentos que exige HTTP 200 y `<app-root`).

## Contribuir

Usa [Conventional Commits](CONTRIBUTING.md).
