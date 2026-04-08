-- CreateIndex
CREATE INDEX "generation_runs_userId_status_createdAt_idx" ON "generation_runs"("userId", "status", "createdAt" DESC);
