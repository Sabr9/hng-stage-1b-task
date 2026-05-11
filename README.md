# Secure Profile Card & E2EE Handshake (Stage 1B/4B)
**Founder:** Aminat Morenikeji Dauda  
**Brand:** Ishraaq Hadequatul Faen

An accessible, responsive profile card built with semantic HTML and modern CSS, featuring automated testability and dynamic time tracking. This project adheres to ethical design principles, rejecting "dark patterns" and prioritizing user privacy.

##  Live Demo
[Insert your Vercel/Netlify link here]

## Features
- **Semantic HTML5:** Built using `<article>`, `<figure>`, `<nav>`, and `<section>` for SEO and screen-reader accessibility.
- **Automated Test Ready:** Every key element includes a `data-testid` for seamless integration with testing suites.
- **Responsive Design:** Mobile-first approach using Flexbox and CSS Grid.
- **Dynamic Time Tracking:** Real-time Epoch clock updating in milliseconds via Vanilla JavaScript.
- **A11y Compliant:** High color contrast (WCAG AA) and keyboard-focusable interactive elements.

## Architecture Diagram
The application follows a simple "View-Logic" separation:

[Client Browser] 
      |
      |-- (HTML) Semantic structure with data-testids
      |-- (CSS)  Responsive layout (Flexbox/Grid)
      |-- (JS)   State management for Date.now() millisecond clock

## Security & Ethics
Following the **Ishraaq Hadequatul Faen** philosophy:
- **No Dark Patterns:** No deceptive UI; all links clearly state they open in new tabs.
- **Privacy First:** No external trackers or invasive cookies.
- **Safe Links:** All external links use `rel="noopener noreferrer"` to prevent tab-nabbing attacks.
- **No Riba/Harmful Industries:** This project and brand strictly avoid collaboration with gambling, interest-based (Riba), or alcohol-related entities.

## Implementation Details
### Key Management (Handshake)
- Public keys are exported as Base64 strings.
- Private keys are stored securely on the client-side via **IndexedDB** (`idb` library) and never sent to the server.

### Known Limitations
- The millisecond clock may have a slight delta (1-10ms) depending on browser thread availability.
- Localized timezone support is currently set to UTC/Epoch.

## Setup & Installation
1. Clone the repository:
   `git clone https://github.com/Sabr9/[your-repo-name]`
2. Open `index.html` in any modern browser.