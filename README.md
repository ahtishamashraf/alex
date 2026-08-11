# Alex Fegan — Luxury Property Portfolio

A cinematic Next.js portfolio for Alex Fegan, Director at Aurabella Properties, serving luxury property clients across Dubai, the UAE, and the United Kingdom.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required portrait asset

Place Alex's supplied transparent portrait at:

```text
public/alex-fegan-cutout.png
```

The portrait is deliberately excluded from Git because this repository accepts source files only and rejects binary media. The application references that deployment-provided path in both the hero and editorial biography. Property photography is served through the configured Unsplash image host, so no other binary assets are required in the repository.

## Production

```bash
npm run build
npm start
```
