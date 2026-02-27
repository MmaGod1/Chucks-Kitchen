# Chuks Kitchen — Project Documentation

---

## 1. Project Overview

Chuks Kitchen is a food delivery web app for a Nigerian home-cooking brand. The idea is that users can come to the site, browse different categories of Nigerian food, add items to their cart, and either log in or create an account. It's basically the frontend of what could be a fully functional food ordering platform.

I built five pages in total — the landing page, an explore/menu page, a login page, a sign up page, and a home page. The design was given to me as a Figma file and my job was to turn it into actual working code.

---

## 2. Tech Stack

I kept it simple — just HTML, CSS and JavaScript. No frameworks, no libraries, nothing fancy. Honestly I felt like this was the right call.

- **HTML5** — I tried to use proper semantic tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` instead of just throwing `<div>` on everything.
- **CSS3** — Everything is in one `styles.css` file. I used CSS variables for the brand colours so I only have to change them in one place. I used Flexbox and Grid for layouts.
- **JavaScript** — One `script.js` file. It handles the hamburger menu on mobile, highlights the active nav link based on what page you're on, and manages the active state on the explore page category list.
- **Google Fonts (Lato)** — This was in the Figma design so I matched it.
- **Font Awesome** — For icons in the forms and navigation.

---

## 3. Project Structure

```
chuks-kitchen/
│
├── index.html      # Main landing page
├── home.html       # Home view
├── explore.html    # Menu/explore page
├── login.html      # Login page
├── account.html    # Sign up page
│
├── styles.css      # All the CSS for every page
├── script.js       # All the JavaScript
│
└── images/         # All images and logo files
```

Nothing complicated here. Everything sits at the root level. The images folder holds all the food photos and the logo SVG files.

---

## 4. How I Translated the Design

I looked at the Figma and tried to break each page into sections before writing any code. So for the landing page I could see there was a nav, a hero, a categories grid, a specials grid, a promo banner and a footer. I built them one at a time.

The hero sections use a `::before` overlay trick so the dark tint sits on top of the background image without me needing to add an extra div in the HTML.

For the food cards I built them mobile-first as a vertical stacked list, then in the desktop media query I switched them to a 3-column grid. That way I didn't have to write the same HTML twice.

---

## 5. Limitations and What I Would Improve

Honestly there are quite a few things I would do differently with more time and better tools.

**The biggest limitation was my environment.** I built this entire project on TrebEdit on my phone because I don't currently have access to a laptop. This made things significantly harder than they needed to be. The biggest pain point was not having browser DevTools. Normally when a style isn't working you just right-click, inspect, and you can see exactly which rule is being overridden and why. Without that I was basically guessing — writing a style, saving, refreshing, seeing if it changed, then trying something else. Some issues that would have taken 30 seconds to debug on a laptop took me much longer because of this. Termux was used to add, format and commit the files to Github

**Forms aren't connected to anything.** The login and signup forms look right but they don't actually do anything when you submit them. There's no backend, no validation messages, nothing. I would add proper client-side validation at minimum and ideally hook them up to a real backend.

**No working cart.** The "Add to cart" and "+" buttons are there but clicking them does nothing. Building out actual cart functionality with a running total and a cart page would be the next big thing to add.

**Images aren't optimised.** They're all full-size PNGs which will slow the page down. I would convert them to WebP and add lazy loading.

**One big CSS file.** It works for now but it's already getting long. If I continued this project I'd break it into separate files per component or page.

**Couldn't test properly on different screen sizes.** Without DevTools and a proper browser I couldn't toggle between different device sizes easily. I tested what I could by resizing manually but I'm sure there are edge cases I missed.

---

## 6. Assumptions I Made

- Some spacing and font sizes weren't exact in the Figma so I just eyeballed them to match as closely as I could.
- The hidden food cards that appear when you click "View All" — the Figma didn't show the interaction explicitly but the pattern was obvious from the design so I implemented it that way.
- The copyright year in the original design said 2000 which I'm pretty sure was a placeholder, so I changed it to 2025.
- The footer social links column had no heading in the Figma so I left it without one.

---

## 7. How to Run It

No setup needed. Just download the folder and open `index.html` in a browser. Make sure you keep the folder structure exactly as it is — the images folder needs to stay in the same place or all the photos will break.

It's also deployed on GitHub Pages so you can view it live without downloading anything.
