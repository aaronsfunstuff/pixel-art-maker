# Pixel Art Creator

## Overview

Pixel Art Creator is an interactive web application that allows users to create pixel art easily and intuitively. It features a pixel grid where users can pick colors and draw their designs, save their creations, and explore a gallery of pixel art.

## Features

- **Pixel Grid**: Create art by clicking on a grid of pixels.
- **Color Picker**: Choose from a palette of colors to customize your art.
- **Grid Resizing**: Adjust the grid size to fit different pixel art designs.
- **Save and Download**: Save your pixel art as an image file and download it to your computer.
- **Idea Generator**: Get random pixel art ideas to inspire your creativity.
- **Gallery**: View and explore saved pixel art creations.

## Technologies Used

- **HTML**: Markup language used for structuring the web pages.
- **CSS**: Styling language used to design and layout the web pages.
- **JavaScript**: Programming language used to add interactivity to the web pages.
- **Canvas API**: A JavaScript API used for drawing graphics on a web page.
- **Local Storage**: Used to save and load pixel art creations in the browser.

## How It Was Made

1. **HTML Structure**: The structure of the web application was built using HTML. Separate HTML files were created for different pages including the main page, create page, gallery, login, and signup.

2. **CSS Styling**: The application was styled using CSS. A pastel color palette was chosen to give the site a soft and appealing look. Custom styles were applied to the pixel grid, buttons, and layout to enhance user experience.

3. **JavaScript Functionality**: 
    - **Pixel Art Creation**: JavaScript was used to handle the drawing on the canvas. Functions were created to manage pixel drawing, color selection, and grid resizing.
    - **Idea Generator**: An array of pixel art ideas was created and a function was added to randomly select an idea for inspiration.
    - **Save and Download**: JavaScript functions were implemented to save the pixel art as an image and download it.
    - **Gallery**: The gallery page displays saved pixel art images. JavaScript was used to dynamically load these images from local storage.

4. **Local Storage**: Local storage was used to persist pixel art creations across sessions. Users can save their artwork, and it will be available the next time they visit the site.

## File Structure

- `index.html`: Main landing page for Pixel Art Creator.
- `create.html`: Page where users can create and draw pixel art.
- `gallery.html`: Page showcasing saved pixel art creations.
- `login.html`: Login page for user authentication.
- `signup.html`: Signup page for new users.
- `styles.css`: Main stylesheet for styling the application.
- `script.js`: JavaScript file containing the core functionality of the pixel art maker.
- `idea-generator.js`: JavaScript file for the idea generator functionality.
