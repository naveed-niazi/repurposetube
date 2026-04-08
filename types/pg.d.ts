declare module "pg" {
  export type PoolConfig = {
    connectionString?: string
    ssl?:
      | boolean
      | {
          rejectUnauthorized?: boolean
        }
  }

  export class Pool {
    constructor(config?: PoolConfig)
  }
}
