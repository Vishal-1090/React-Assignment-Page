# Elementum Assignment

Live Link Of The Website

-- https://react-assignment-page.vercel.app/

React implementation of the provided Elementum landing page design, built as a responsive single-page site with reusable section components and Docker support.

## Tech Stack

- React
- Vite
- CSS
- Docker
- Nginx

## Features

- Responsive landing page based on the provided design reference
- Reusable section components
- Reusable shared UI components
- Local image assets wired through the app
- Dockerized production build

## Project Structure

```text
src/
  components/
    layout/
    sections/
    shared/
  data/
  App.jsx
  main.jsx
  styles.css
public/
Dockerfile
docker-compose.yml
```

## Getting Started

### Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:5173
```

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Run With Docker

Build and run the project with Docker Compose:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

## Notes

- Some design assets were provided as local images and integrated into the `public/` folder.
- The page content is structured through `src/data/siteContent.js`.
- The app is organized so sections can be reused and adjusted independently.
