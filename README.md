# Sign-up Form

Project from [The Odin Project – Intermediate HTML and CSS course](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form).

**Live demo:** https://ayxan1110.github.io/odin-sign-up-form/

A sign-up page for an imaginary service called ODIN, with a photo side panel and a form that is checked by the browser before it can be sent.

## What I used
- **Flexbox** for the whole layout: the page is split into a side panel and a content area, and the form fields wrap into two columns
- A proper `<form>` with `<label for>` connected to every `<input>`, and the right input types (`text`, `email`, `tel`, `password`)
- Built-in validation: `required`, `minlength` and a `pattern` for the phone number
- `:user-invalid` so a field only turns red after the user has interacted with it (with an `@supports` fallback that uses a `touched` class added by JavaScript)
- `:focus` style with a blue border and a soft box-shadow
- A small `script.js` that uses `setCustomValidity()` to mark "Confirm password" as invalid until it matches "Password"
- A dark, semi-transparent `rgba()` band behind the logo so it stays readable on the photo, and the logo drawn as an inline SVG
- Fonts from Google Fonts (Roboto and Cinzel for the logo)

Photo: "Fern Leaf" by [Rowan Heuvel](https://unsplash.com/@insolitus) on Unsplash (loaded from Wikimedia Commons, CC0).
