// import config from "./config";
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../types/openrct2.d.ts" />

import main from './main';

const { MOD_AUTHOR, MOD_NAME } = process.env;

registerPlugin({
  name: MOD_NAME!,
  version: '1.0',
  authors: [MOD_AUTHOR!],
  type: 'local',
  licence: 'MIT',
  targetApiVersion: 77,
  main,
});
