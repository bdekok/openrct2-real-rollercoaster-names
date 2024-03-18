import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dotenv from 'dotenv';
import rollupPluginInjectProcessEnv from 'rollup-plugin-inject-process-env';
import path from 'path';
import pkg from './package.json' assert { type: 'json' };
dotenv.config();

const { OPENRCT2_PATH } = process.env;
const MOD_NAME = pkg.name;
const MOD_AUTHOR = pkg.author;

const production = !process.env.ROLLUP_WATCH;
const distDir = 'dist';

const getFilePath = () => {
  const fileName = `${MOD_NAME ?? 'plugin'}.js`;

  if (production || !OPENRCT2_PATH) {
    return path.join(distDir, fileName);
  }
  return path.join(OPENRCT2_PATH, 'plugin', fileName);
};

export default {
  input: 'src/index.ts',
  output: {
    file: getFilePath(),
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    typescript(),
    rollupPluginInjectProcessEnv({ MOD_NAME, MOD_AUTHOR }),
    json(),
  ],
};
