# The Odin Project - Calculator

## Goal

To create a functioning old-school-style calculator using combined knowledge of HTML/CSS/JS.

## Features

- Contains all the bells and whistles you'd expect out of a simple, 40 year old pocket calculator.
- Ugly-but-functional code reflects the chosen 80s aesthetic.
- Elegantly handles large display values using a mix of truncation and scientific notation.
- Greatly limits the amount of weirdness that can be attempted in a futile attempt to mitigate user and/or operational error. For example, the calc won't allow consecutive operations to run without number input.  Still, there are sure to be strange combinations of inputs I didn't think of and, failing even that, JS floats gon' float and introduce mildly infuriating tiny math errors.

## Tech Used

- **Bog standard HTML** - soooooo fancy!
- **CSS Grid** for button layout. Grid-template-area in particular made visualizing the project at the early stages and placing button elements a breeze.
- **CSS @media Query** with a variable viewport width and font size to adapt layout scaling dynamically.
- **JS Event Listeners** to apply button animation and make the damn thing work.

## To-Do

- [x] Add display
- [x] Add number button grid (with `.` and `=` keys to round out a 3x4)
- [x] Add basic operand buttons (add, subtract, multiply, divide)
- [x] Program operations
- [x] MRC/M+/M- and added goodies
- [x] Final look & feel formatting (80s inspired theming, "Calcio")
- [ ] Add keyboard functionality.
