import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig & { headers: { [key: string]: string } } = {
  overwrite: true,
  schema: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'myadminsecretkey',
  },
  documents: ['./src/queries/*.graphql'],
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
    afterAllFileWrite: ['prettier --write'],
  },
}

export default config
