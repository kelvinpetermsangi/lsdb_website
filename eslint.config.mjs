import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['temp-lsdb/**', 'dev-server.out.log', 'dev-server.err.log'],
  },
];

export default config;
