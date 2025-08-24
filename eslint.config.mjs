import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      '*.min.js',
      '*.min.css',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      '.git/**',
      'public/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;
