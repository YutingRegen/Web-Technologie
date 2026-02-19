# 🎸 Rock am See Festival 2025

A modular web development project created for the fictional music event  
**“Rock am See Festival 2025”**.

This repository combines four independent sub-projects that demonstrate different web technologies and concepts:

-  Static Multi-Page Website  
-  Festival Single-Page Application (SPA)  
-  Weather Data Visualization (D3 + Express)  
-  Feedback Application (Svelte + localStorage)  

Each module can be run independently.

---

#  Project Overview

| Module | Type | Focus |
|--------|------|--------|
| Static Website | HTML / CSS / JS | Multi-page festival site |
| Festival SPA | JS + API | Countdown & Volunteer API |
| Weather Visualization | D3 + Express | Data visualization |
| Feedback App | Svelte | State management & persistence |

---

# 1️⃣ Static Multi-Page Website

## Description

A classic multi-page HTML website presenting the festival information.

## Pages

- `index.html` – Homepage
- `lineup.html` – Band Line-Up
- `helfer.html` – Volunteer Login
- `impressum.html` – Legal Notice

## Features

- Shared navigation bar
- Animated `<h1>` headline color transitions
- Hover effects for navigation and buttons
- JavaScript-based form simulation
- Responsive layout
- Local image assets

## Technologies

- HTML5
- CSS3 (layout & animations)
- JavaScript


# 2️⃣ Festival Single-Page Application (SPA)

## Description

An interactive SPA including a live countdown, volunteer information, event requirements, and dynamically loaded volunteer profiles.

## Features

### Countdown Timer

- Live countdown to **August 5, 2025 – 12:30 PM**
- Updates every second using `setInterval`
- Loading animation before initialization

### Volunteer Data Overview

- Static table explaining personal data requirements for helpers


### Dynamic Volunteer List

- Fetches 30 users from Random User API


## Technologies

- HTML5
- CSS (dark theme + responsive design)
- Bootstrap
- JavaScript (Fetch API + sorting logic)

---

# 3️⃣ Weather Visualization App (D3 + Express)

## Description

A Single Page Application visualizing hourly weather data for the festival.

## Visualizations

### ☁ Cloud Coverage (Line Chart)

- Displays cloud coverage percentage over time
- Based on hourly timestamps

## Tech Stack

Frontend:
- HTML
- CSS
- Bootstrap 5
- D3.js (v7)

Backend:
- Node.js
- Express.js

---
# 4️⃣ Festival Feedback App (Svelte)

## Description

A feedback application allowing users to submit ratings and experiences about the festival.

## Features

- Username input
- 1–5 star rating system
- Title and description input
- Dynamic card-based display
- Data persistence via localStorage

# Technologies Used (Overall)

- HTML5
- CSS3
- Bootstrap
- JavaScript (ES6+)
- Fetch API
- D3.js
- Node.js
- Express.js
- Svelte
- localStorage

---
