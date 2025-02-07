import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig & { headers: { [key: string]: string } } = {
  overwrite: true,
  schema: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  },
  documents: 'queries/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;

