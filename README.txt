PROJECT 03 - RESPONSIVE PRODUCT PRICING CARDS
=============================================

Author: Arya

ABOUT
-----
A modern SaaS pricing card component with three plans
(Starter, Pro, Business) and a Monthly / Yearly billing toggle.

FEATURES
--------
- CSS transitions and transform hover effects on every card
  (the card lifts and grows slightly when you hover over it)
- JavaScript toggle switch for the billing cycle
  (prices and the "billed" note update instantly; yearly saves 20%)
- Badge ribbons: "Popular" on the Pro plan and "Best Value" on Business
- Fully responsive: 3 columns on desktop, 1 column on tablet and phone
- Accessible: toggle uses role="switch" and aria-checked,
  visible keyboard focus styles, reduced-motion support

CONCEPTS USED
-------------
- CSS Grid and Flexbox layout
- CSS transitions, transforms and media queries
- DOM manipulation and event listeners in JavaScript
- data-* attributes to store monthly and yearly prices in the HTML

FILES
-----
index.html  - page structure and the three pricing cards
style.css   - styling, hover effects, ribbons and responsive layout
script.js   - billing toggle logic
README.txt  - this file

HOW TO RUN
----------
1. Keep all files in the same folder.
2. Open index.html in a modern browser (Chrome, Edge, Firefox).
3. Click the switch under the heading to change between Monthly and Yearly.
4. Hover over the cards to see the hover effect.
