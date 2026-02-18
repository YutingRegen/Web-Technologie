# Festival Feedback App

This is a feedback application for the event "Rock am See 2025". Users can submit their feedback, including a rating, title, and experience report. The feedback is stored and displayed in a list format, with data persistence using localStorage.

## Features

- **User Feedback Form:** Users can enter their username, rating (from 1 to 5 stars), title, and experience.
- **Persistent Data:** Data is saved to localStorage so it persists across page refreshes.
- **Rating Display:** Feedback is displayed with a dynamic star rating system based on user input.
- **List Display:** Submitted feedback is displayed dynamically in a card-style layout.

## Project Structure

### src/

- **App.svelte:** Main component, imports the `Form`, `Card`, and `Reviews` components, and stores/retrieves feedback.
- **Form.svelte:** A form where users can submit their feedback (username, rating, title, and report).
- **Card.svelte:** Displays individual feedback entries with the username, rating (stars), title, and content.
- **Reviews.svelte:** Displays all feedback cards stored in the `reviewsStore`.
- **stores.js:** Manages the app's global state using Svelte's store API. Feedback data is stored in the `reviewsStore` and persisted in `localStorage`.

### How It Works

- **Form Handling:** Users fill out the form with their feedback. Upon submission, the form data is stored in the Svelte store (`reviewsStore`) and in `localStorage`. This allows the feedback to persist across page refreshes.
- **Rating System:** The user can provide a rating by clicking on stars. The rating is stored and displayed in the feedback cards.
- **Card Display:** The submitted feedback is displayed as cards with the user's name, title, rating (stars), and experience content.
- **Data Persistence:** The reviews data is automatically saved to `localStorage` whenever it is updated, allowing the data to persist even when the page is refreshed.
