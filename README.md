# OpenRCT2 plugins starter template

A basic starter template with:

- Typescript, with openRCT2 types
- Rollup
- Eslint
- Prettier

## Prerequisites

Make sure you have an up to date version of nodejs, ideally you can install [nvm](https://github.com/nvm-sh/nvm) and run `nvm use` in the folder.

## Setup

1. [Create your own repository using this one as a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) and clone it

2. Update the name and author of the plugin in the `package.json` to what you desire. This will be used for the filename and as registration for openRCT2.

3. Run `npm install`, this will also run the postinstall script which will download the openRCT2 types in the types folder.

## Usage

| script                   | description                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`          | Builds the plugin in the `dist` folder of your project                                                                                                                                                                                                                                      |
| `npm run watch`          | Watches for code changes and builds it in the OpenRCT2 folder, when no folder is found it will watch and output to the dist folder. Please make sure you have [hot reload enabled in OpenRCT2](https://github.com/OpenRCT2/OpenRCT2/blob/master/distribution/scripting.md#writing-scripts). |
| `npm run lint`           | Runs code linting check for finding potential mistakes                                                                                                                                                                                                                                      |
| `npm run lint:fix`       | Runs code linting check and fix for finding potential mistakes                                                                                                                                                                                                                              |
| `npm run prettier`       | Runs the code formatting rules for consistent code style                                                                                                                                                                                                                                    |
| `npm run prettier:fix`   | Runs the code formatting rules and apply fixes for consistent code style                                                                                                                                                                                                                    |
| `npm run download:types` | Downloads the OpenRCT2 types from the OpenRCT2 repository                                                                                                                                                                                                                                   |

## Thanks

Thank you to @wisnia74, I was using his project earlier [openrct2-typescript-mod-template](https://github.com/wisnia74/openrct2-typescript-mod-template). This repository is however no longer maintained.
