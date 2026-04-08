-- CreateEnum
CREATE TYPE "GenerationStatus" AS ENUM ('completed', 'failed');

-- CreateTable
CREATE TABLE "generation_runs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "GenerationStatus" NOT NULL DEFAULT 'completed',
    "inputUrl" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "videoTitle" TEXT NOT NULL,
    "videoChannel" TEXT NOT NULL,
    "videoThumbnailUrl" TEXT,
    "transcriptText" TEXT NOT NULL,
    "transcriptWordCount" INTEGER NOT NULL,
    "transcriptSegmentsCount" INTEGER NOT NULL,
    "provider" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "generation_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generation_outputs" (
    "id" TEXT NOT NULL,
    "generationRunId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "generation_outputs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "generation_runs_userId_createdAt_idx" ON "generation_runs"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "generation_runs_videoId_idx" ON "generation_runs"("videoId");

-- CreateIndex
CREATE INDEX "generation_outputs_generationRunId_idx" ON "generation_outputs"("generationRunId");

-- CreateIndex
CREATE INDEX "generation_outputs_type_idx" ON "generation_outputs"("type");

-- AddForeignKey
ALTER TABLE "generation_outputs" ADD CONSTRAINT "generation_outputs_generationRunId_fkey" FOREIGN KEY ("generationRunId") REFERENCES "generation_runs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
