
# Website Development TODO

This document outlines the step-by-step tasks required to develop a wedding party website using Next.js, Tamagui for UI, with content served from a JSON file and server-side rendering enabled. The site will support English and Swedish languages, with the ability to toggle between them.

## Setup

- [ ] Initialize a new Next.js project with `npx create-next-app@latest your-project-name`.
- [ ] Install necessary packages: `npm install tamagui next-translate`.
- [ ] Set up a basic Tamagui configuration according to the [Tamagui documentation](https://tamagui.dev/docs/installation).
- [ ] Create a `content.json` file at the root of your project to store the website content in both English and Swedish.

## Content Structure

- [ ] Structure `content.json` with language keys at the root, and page names as nested objects. Include keys for each piece of content.
    ```json
    {
      "en": {
        "home": {
          "welcomeMessage": "Welcome to Our Celebration"
        },
        "eventDetails": {
          "date": "June 1",
          "time": "17:00 - 02:00",
          "location": "Venue Address"
        }
      },
      "sv": {
        "home": {
          "welcomeMessage": "Välkommen till Vårt Firande"
        },
        "eventDetails": {
          "date": "1 Juni",
          "time": "17:00 - 02:00",
          "location": "Platsadress"
        }
      }
    }
    ```

## Implementing Internationalization

- [ ] Use `next-translate` to set up i18n for your Next.js project, configuring it to read translations from your `content.json`.
- [ ] Configure `i18n.js` in your Next.js project root as per `next-translate` documentation, specifying English and Swedish as supported languages.

## Pages Development

### Home Page (`pages/index.js`)

- [ ] Implement server-side rendering (SSR) to fetch language-specific content.
- [ ] Utilize Tamagui components to layout the page.
- [ ] Include a language toggle feature, leveraging Next.js's router to switch between languages.

### Event Details Page (`pages/event-details.js`)

- [ ] Implement SSR for language-specific content fetching.
- [ ] Display event details like date, time, and location using Tamagui components.
- [ ] Add language toggle functionality.

### FAQs Page (`pages/faqs.js`)

- [ ] Use SSR to load FAQs based on selected language.
- [ ] Format FAQ sections with Tamagui for consistency.
- [ ] Implement the language toggle feature.

### Contact Page (`pages/contact.js`)

- [ ] Set up a simple contact form with server-side submission handling.
- [ ] Include SSR for loading language-specific labels.
- [ ] Add a language toggle.

## Styling

- [ ] Customize Tamagui themes to match the wedding theme.
- [ ] Ensure responsive design for mobile and desktop views.

## Testing and Deployment

- [ ] Test language toggling and content loading in both languages.
- [ ] Deploy the project to Vercel, ensuring environment variables for internationalization are correctly set.
- [ ] Test the deployed site for performance and usability.
