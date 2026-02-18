# Rock am See Festival 2025 – T10

This is a static multi-page website project created by Team T10 for the fictional music event "Rock am See Festival 2025". It includes four pages: homepage, band line-up, volunteer login form, and legal notice.

---

## Pages & Features

The website has 4 pages, all connected through a navigation bar and styled with a shared background image and layout. All main titles on each page have animated color transitions. Hover effects are added for nav links and the submit button (see screenshots below).

### index.html – Homepage

The homepage introduces the festival with title, date, and a welcome message. The background shows a concert scene and the content is center-aligned. Three text boxes explain the festival concept, stage setup, and volunteer invitation.

### lineup.html – Band Line-Up

This page presents 5 bands with their name, genre, performance time, description, and image. The layout is clean and consistent. The headliner band is highlighted with a colored border.

### helfer.html – Volunteer Form

This page contains a simple login form with username and password fields and a submit button. After clicking the button, entered data is shown on the page (simulated response).

### impressum.html – Legal Notice

This page shows fictional legal details such as project name, address, contact person, and disclaimer.

---

## Technologies Used

- HTML5 for structure
- CSS3 (style.css) for layout and animation
- JavaScript for the form simulation
- Local PNG assets for background and band visuals
- Internal navigation using relative links

---

## Animations & Effects

- All `<h1>` elements have a color animation using `@keyframes`
- Hover effect on navigation links and buttons with color or shadow change

### Animation preview:

![Headline Animation](assets/animation-h1.gif)

### navigation：

![Navigation Hover](assets/navigation.jpg)

### button：

![Button Hover](assets/button.jpg)

---

## Testing

### To view the site:

1. Open `index.html` in a browser or use a local web server (e.g., Live Server in VS Code)

### To test the login functionality:

1. Navigate to the **Helfer:innen** page (helfer.html) via the top navigation bar
2. Enter valid login credentials (you can use test data from dummyjson.com):

   - `username`: `emilys`
   - `password`: `emilyspass`

3. Click the **"Anmelden"** button

4. After a successful login, a user info panel will appear below the form showing the following data:

```plaintext
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDcxNTY2NTAsImV4cCI6MTc0NzE2MDI1MH0.50CHQ7V_ceIHULMJTFFlV8csf4h4Mv4wL0BEaGmL3Nc",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDcxNTY2NTAsImV4cCI6MTc0OTc0ODY1MH0.4M7HUN1WtS40tJ9hujjSKAVV1XzCUIFbLvY-i9jlIac",
  "id": 1,
  "username": "emilys",
  "email": "emily.johnson@x.dummyjson.com",
  "firstName": "Emily",
  "lastName": "Johnson",
  "gender": "female",
  "image": "https://dummyjson.com/icon/emilys/128"
}
```

Form demo screenshot

![Form Demo Screenshot](assets/Form-demo.jpg)

---
