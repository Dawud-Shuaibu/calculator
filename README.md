## Calculator Web

A simple web-based calculator built with HTML, CSS, and JavaScript. It provides the standard arithmetic operations (addition, subtraction, multiplication, division) and includes a small set of UI and accessibility improvements.

## Highlights / What changed

- Theme selector: a small control in the top-right lets users pick Window Default, Light, or Dark theme. The selected preference is persisted in localStorage.
- Responsive display: the calculator adjusts the display font size automatically as numbers grow to keep large numbers visible.
- Improved keyboard handling: the app prevents unwanted default keys and maps number, operator, clear (C), delete (Backspace), and Enter to calculator actions.
- Minor UI polish and bug fixes to button behavior and focus handling.

![Screenshot](images/calculator-ui.png)

## Keyboard Shortcuts and Controls

- Numbers: `0-9`
- Decimal point: `.`
- Operations: `+`, `-`, `*`, `/`
- Clear: `C` or `c`
- Delete / backspace: `Backspace`
- Solve / equals: `Enter`

Notes:
- The page captures many key events to keep focus on the calculator — common navigation keys (Tab, Arrow keys, Home/End) and browser shortcuts (F5) are intentionally left alone.

## How to run

1. Clone the repository or download the files.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari). No build step or server is required.

Optional: to serve locally and get a proper Content-Type header, run a simple static server (Python, Node, etc.).

## Project Structure

```
calculator/
├── index.html        # Main UI and theme selector
├── style.css         # Styling including light/dark theme variables
├── script.js         # Theme handling, keyboard support and calculator logic
├── images/           # Assets (e.g. screenshots)
│   └── calculator-ui.png
├── README.md
└── LICENSE
```

## Notes for contributors

- If you add new keyboard mappings or change focus behavior, update `script.js` and the `Keyboard Shortcuts` section above.
- When changing theme variable names in `style.css`, keep the `.darkmode` overrides in sync.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

Contributions welcome — open an issue or submit a pull request.