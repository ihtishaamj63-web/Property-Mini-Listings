# Property Mini-Listings

A Vue 3 single-page application for Homes & Beyond, a Cape Town-based short-term property rental startup. This prototype displays property listings in a responsive card-based layout with search, sort, price range filtering, bookmarking, and animated transitions.

## Project Overview

Homes & Beyond is building its digital presence and requires a modern, interactive listings page. This application serves as a lightweight frontend prototype that allows users to browse available properties, filter by criteria, and save favorites before contacting an agent.

## Features

- Dynamic property listings rendered from local data
- Real-time search by title or location
- Sort toggle for price (low-to-high or high-to-low)
- Dual-range price slider for filtering by budget
- Bookmark properties with localStorage persistence
- Animated card transitions during search and filtering
- "Not Available" badges on unavailable properties
- Responsive grid layout for all screen sizes
- Active and total property counts displayed in the header

## Screenshot

![Property Mini-Listings interface showing the header with brand and stats, search bar, sort button, price range filter, and a grid of property cards with bookmark and availability indicators](Property-Mini-Listings\assets\imgs\screenshot.png)

## Tech Stack

- Vue 3 (Options API)
- Vite
- Plain CSS with scoped component styles
- No external libraries, router, or API calls

## Installation and Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 7 or higher)

### Steps

Clone the repository, navigate into the project directory, install dependencies, and start the development server:

```bash
git clone https://github.com/your-username/property-mini-listings.git
cd property-mini-listings
npm install
npm run dev
```

Open your browser and visit `http://localhost:5173`.

> **Note:** The port may differ if `5173` is already in use. Check the terminal output for the exact local URL.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

The output will be generated in the `dist/` directory and will be ready for deployment.
