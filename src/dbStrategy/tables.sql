CREATE DATABASE shortly;

CREATE TABLE users (
	id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	token TEXT,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE urls (
	id SERIAL NOT NULL PRIMARY KEY,
	"shortUrl" TEXT NOT NULL UNIQUE,
	url TEXT NOT NULL,
	"visitCount" INTEGER DEFAULT 0,
	"userId" INTEGER NOT NULL REFERENCES users(id),
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);