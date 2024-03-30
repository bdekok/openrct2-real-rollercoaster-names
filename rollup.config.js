import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';
import { homedir } from 'os';
import { existsSync } from 'fs';
import replace from '@rollup/plugin-replace';

import pkg from './package.json' assert { type: 'json' };

const MOD_NAME = pkg.name;
const MOD_AUTHOR = pkg.author;

const production = !process.env.ROLLUP_WATCH;
const distDir = 'dist';

const getFilePath = async () => {
  const fileName = `${MOD_NAME ?? 'plugin'}.js`;
  const openRctPath = await getRCTDir();

  if (production || !existsSync(openRctPath)) {
    return path.join(distDir, fileName);
  }
  return path.join(openRctPath, 'plugin', fileName);
};

const getRCTDir = async () => {
  const platform = process.platform;
  const dirName = 'OpenRCT2';

  switch (platform) {
    case 'win32': {
      const { stdout } = await promisify(exec)(
        'powershell -command "[Environment]::GetFolderPath(\'MyDocuments\')"'
      );
      return path.join(stdout.trim(), dirName);
    }
    case 'darwin': {
      return `${homedir()}/Library/Application Support/${dirName}`;
    }
    default: {
      const configPath = process.env.XDG_CONFIG_HOME || `${homedir()}/.config/`;
      return path.join(configPath, dirName);
    }
  }
};

export default {
  input: 'src/index.ts',
  output: {
    file: await getFilePath(),
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    typescript(),
    json(),
    replace({
      preventAssignment: true,
      values: { MOD_NAME, MOD_AUTHOR },
    }),
  ],
};
