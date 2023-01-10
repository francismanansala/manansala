declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      FACEBOOK_CLIENT_ID: string
      FACEBOOK_CLIENT_SECRET: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      NEXTAUTH_SECRET: string
      NEXT_PUBLIC_GRAPHQL_URL: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}