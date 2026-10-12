# Calculator

A basic calculator in plain HTML, CSS and JavaScript: clear all, delete last digit, percentage, the four operations and decimals.

## How it works

Button presses build an expression in a read-only display. Pressing `=` evaluates it, and invalid input resets the display with a message instead of failing silently.

## Built with

HTML5, CSS3 and vanilla JavaScript.

## Run it locally

```bash
git clone https://github.com/Arulkumaran-2001/Calculator.git
```

Then open `index.html` in a browser.

## What I'd change today

This was an early DOM project. Rewriting it now, I would:

- Replace `eval()` with a small expression parser, so only arithmetic can ever run
- Add keyboard input (digits, operators, Enter, Backspace, Escape)
- Move the inline `onclick` handlers into one delegated event listener
- Announce results to screen readers with an `aria-live` region

---

Built by [Arulkumaran R](https://arulkumaran-portfolio-blush.vercel.app), full stack developer in Thiruvananthapuram. See my [portfolio](https://arulkumaran-portfolio-blush.vercel.app) for recent production work.
