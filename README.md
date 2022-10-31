# 🦢 ACT Government Website Design System

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat-square)](#) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ACTGov-Design-System/ACTGov-Design-System?style=flat-square) ![GitHub contributors](https://img.shields.io/github/contributors/ACTGov-Design-System/ACTGov-Design-System?style=flat-square)

| Directory          | Function  | Description                                                     |
| ------------------ | --------- | --------------------------------------------------------------- |
| `.storybook`       | framework | Storybook configuration                                         |
| `src`              | content   | documentation, design tokens, components, patterns and previews |
| `storybook-static` | build     | static application directory                                    |

## 🌏 Overview

This repo contains the documentation and components for the ACT Government Website Design System.

In addition to the docs and source code, you will find assembled component patterns and complete directorate page previews.

## ➡️ Getting started

Installation is simple; with the project cloned to your local machine, navigate to the root folder and run the following command to download and install this project's packages and dependencies:

```sh
npm install
```

Allow the process to finish before proceeding.

## 🚀 Launch it

With all of the packages and dependencies now installed, we can run the application locally in development mode:

Run the following command:

```console
npm run dev
```

This will start Storybook locally and output the address in the console - this version hot-reloads when you make changes to the local files.

## 📦 Build it

Once you have completed your updates, you will need to generate the static files that are served to end users.

To build the application, run the following command:

```console
npm run build
```

This command also runs ESLint and Prettier before the build; this ensures code standards and hygiene are maintained.

This static web application will build into the `storybook-static` directory.

If the build pipelines are disabled, you will need to move the storybook-static directory to your hosting environment manually.
