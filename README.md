# Video Idea Generator

A web app that generates creative video content ideas using OpenAI's GPT-4.

## Project Description

This platform leverages AI (OpenAI or similar APIs) to generate creative video content ideas based on a user's topic input. The generated videos can be previewed, and once finalized, they can be uploaded to social media platforms like YouTube and Instagram.

Key objectives include:

Demonstrating React.js best practices
Implementing OTP-based login
Integrating AI APIs for video content generation
Enabling video publishing to social media
Implementing a content dashboard with filtering and analytics

## Key Features

## 🚀 Responsive Design

This application is built with a **responsive design** to ensure a seamless experience across all devices—from mobile phones to desktop screens. 📱💻

- **Mobile-First**: The app is optimized for **mobile devices** with a design that adapts elegantly to **tablet** and **desktop** screens.
- **Responsive Layout**: We leverage modern layout techniques for a layout that adjusts perfectly to all screen sizes.

### 🍔 Hamburger Menu on Mobile

- On smaller screens, the app features a **hamburger menu** 🥪 for easy navigation. This menu hides behind a sleek icon and expands when clicked, providing a smooth and intuitive mobile experience.
- The **hamburger menu** ensures that the user interface remains clean and uncluttered, even on mobile devices, while still giving users quick access to all sections of the app.


## Authentication System:

OTP-based login using Firebase Authentication or a similar service
Protected routes for authenticated users
Session management and auto-logout functionality

## Video Content Generation:

Integration with AI APIs (e.g., OpenAI) to generate video ideas
Customizable generation parameters for tone, topic, and video type
Preview of generated video ideas before publishing
Loading states and API error handling

## Content Dashboard:

Display previously generated videos and their metadata
Filter videos by publishing status (draft, published, failed)
Add video performance analytics

## Installation

### Prerequisites:

- Node.js >=14.x
- npm >=6.x
- An OpenAI API key (if you want to use GPT-4).

### Steps:

1. Clone the repository:
   git clone https://github.com/sonykikuma/palcode-creator.git

   cd video-idea-generator

2. Install dependencies:
   npm install

3. Set up environment variables:
   Create a .env file in the root of the project.
   Add your OpenAI API key:
   VITE_OPENAI_API_KEY=your-openai-api-key

4. Run the application:
   npm run dev

5. Open your browser and go to http://localhost:5173.


## 🌐 Deployment

The application is **deployed** and live on **Vercel**. You can check it out at the following URL:

[**Video Idea Generator - Live Demo**](https://palcode-creator.vercel.app)

Feel free to explore the app and see how it works in real-time!
