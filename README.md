# 🦢 ACT Government Website Design System

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat-square)](#)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ACTGov-Design-System/ACTGov-Design-System?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/ACTGov-Design-System/ACTGov-Design-System?style=flat-square)

| Directory          | Function  | Description                                                     |
| ------------------ | --------- | --------------------------------------------------------------- |
| `.storybook`       | framework | Storybook configuration                                         |
| `src`              | content   | documentation, design tokens, components, patterns and previews |
| `storybook-static` | build     | static application directory                                    |

## 🌏 Overview

This repo contains both the documentation and components for the ACT Government Website Design System.

In addition to the docs and source code you can also find assembled component patterns and even complete directorate page previews.

## Getting Started

Installation is simple, with the project cloned to your local machine navigate to the root folder and run the following command to download and install this project's packages and dependencies:

```sh
npm install
```

## 🚀 Launch it

### Launch locally

To open the design system in development mode run the following command from the root folder:

```console
npm run dev
```

This will start Storybook locally and output the address in the console.

This local copy will hot reload when you make changes.

### Build the site for production

To prepare the Storybook for deployment to production you will need to lint and build the latest version. Do this by running the following command:

```console
npm run build
```

This will build the static web application into `storybook-static`

## 🧼 Hygiene

### Test all

Run the project through ESLint and Prettier concurrently using:

```console
npm run test-all
```

### Fix all

Fix all issues found by ESLint and Prettier concurrently using:

```console
npm run fix-all
```

#### ESLint

Run ESLint through this project to ensure standards and hygiene are kept.

```console
npx eslint .
npx eslint . --fix
```

#### Prettier

Run Prettier through this project to ensure standards and hygiene are kept.

```console
npx prettier --check .
npx prettier --write .
```
