# Notes Saver App

A simple, visually appealing web application for taking and saving temporary notes. Built with vanilla HTML, CSS, and JavaScript. The application uses your browser's local storage to save notes, ensuring they persist between sessions without needing a backend server or database.

## Features

- **Store Notes Locally**: Uses `localStorage` to save notes natively in your browser.
- **Clean Interface**: A modern, clean, and minimalistic user interface designed without emojis.
- **Add and Delete**: Easily write new notes or delete old ones when they are no longer needed.
- **Clear All**: A convenient button to clear all notes at once.
- **XSS Protection**: Basic HTML escaping is implemented to prevent Cross-Site Scripting (XSS) when displaying user input.

## Tech Stack

- **HTML5**: For the structure of the application.
- **CSS3**: For styling, layout, and a pleasant user experience.
- **JavaScript**: For the logic, handling user interactions, and managing data with `localStorage`.

## Getting Started

Since this is a client-side application, you don't need any complex setup or server to run it.

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Start typing your notes!

Alternatively, you might be able to start the application using the included `start.vbs` script if you are on Windows.

## Usage

- Type your thoughts into the text area.
- Click the **Save Note** button to add it to your list.
- Click **Delete** on any individual note to remove it.
- Use the **Clear All** button to delete all stored notes at once.
