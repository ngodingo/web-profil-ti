CREATE TABLE "news" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT NOW()
);