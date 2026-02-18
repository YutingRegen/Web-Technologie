# README: Rock am See Festival 2025

# Einleitung

This is a responsive single-page application designed for the fictional event **"Rock am See Festival 2025"**. It displays a live countdown to the festival, an overview of personal data for volunteers, scheduled festival events, and dynamically fetched volunteer profiles with filtering and sorting capabilities.

# Features & Sections

### Countdown Section

- Displays a live countdown to **August 5, 2025, 12:30 PM**.
- Uses `<span>setInterval</span>` to update days, hours, minutes, and seconds every second.
- Includes a loading animation before the countdown initializes.

### Volunteer Data Overview

- Static table explaining the types of personal data collected from helpers.
- Data includes gender, birth date, age, email, phone numbers, country, and profile photo guidelines.

### Festival Event Requirements

- Lists various planned festival tasks like:
  - Entrance control
  - First-aid service
  - Stage tech setup
- Each task comes with specific criteria such as minimum age or gender.

### Dynamic Volunteer List

- Fetches 30 volunteers from the [Random User API](https://randomuser.me/).
- Displays image, name, gender, email, birthday, registration date, and contact info.
- Includes dropdown to **sort volunteers** by name (asc/desc) or registration date (asc/desc).
- Smooth loading animation shown during data fetch.
- If the API fails to load data, a popup alert will be displayed.

---

# Technologies Used

- **HTML5**: Semantic layout with sections and containers.
- **CSS**: Custom styles, responsive layout, and animations.

  - Theme: dark background, orange accents, serif fonts
  - Media queries for mobile responsiveness

- **Bootstrap**: Grid layout, responsive utilities, and UI components.
- **JavaScript**:

  - Countdown logic with time math
  - Fetching and displaying user data
  - Sorting logic for volunteers

# Structure Overview

### HTML Sections:

- **Navigation Bar**: Internal anchors to sections: Info, Veranstaltungen, Helfer:innen
- **Countdown Block**: Timer display with styled digits
- **Info Table**: Static helper data requirements
- **Event Table**: Static event task requirements
- **Helper Section**: Volunteer list fetched via API with sorting
- **Footer**: Copyright info

### JavaScript Highlights:

- **loadCountDown()**:to initialize the timer after animation
- **getJson()**:fetches JSON data and displays it in table layout
- **setHelferinList()** dynamically creates HTML table rows and user cards
- Sorting functionality based on dropdown selection

# Animations & Effects

- Loader animation with moving orange dots using keyframes
