import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"
import { PrismaClient } from "@/lib/generated/prisma/client"

function readDbUrl() {
  const value = process.env.SUPABASE_POSTGRES_PRISMA_URL?.trim() ?? process.env.SUPABASE_POSTGRES_URL?.trim()
  if (!value) {
    throw new Error(
      "Missing SUPABASE_POSTGRES_PRISMA_URL or SUPABASE_POSTGRES_URL. Set one in your environment to enable Prisma runtime access."
    )
  }
  return value
}

function shouldUseTls(connectionString: string) {
  return !connectionString.includes("localhost") && !connectionString.includes("127.0.0.1")
}

function stripSslQueryParams(connectionString: string) {
  try {
    const url = new URL(connectionString)
    const sslParams = [
      "sslmode",
      "ssl",
      "sslrootcert",
      "sslcert",
      "sslkey",
      "sslcrl",
      "sslpassword",
      "sslaccept",
    ]
    sslParams.forEach((param) => url.searchParams.delete(param))
    return url.toString()
  } catch {
    return connectionString
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const connectionString = readDbUrl()
const normalizedConnectionString = stripSslQueryParams(connectionString)
const pool = new Pool({
  connectionString: normalizedConnectionString,
  ssl: shouldUseTls(connectionString)
    ? {
        // Supabase poolers can present cert chains that fail local verification on some setups.
        rejectUnauthorized: false,
      }
    : undefined,
})
const adapter = new PrismaPg(pool)

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
