# Bug Tracker — Client

This is the frontend (client) for the MERN Bug Tracker application, built with React + Vite and using Redux Toolkit for state management.

**Quick status:** The client is configured to use Vite (dev server on `5173`) and proxies API calls starting with `/api` to the backend at `http://localhost:5000`.

**Table of contents**
- Getting started
- Scripts
- Configuration
- Troubleshooting
- Recent client fixes

## Getting started

Prerequisites:
- Node.js (v16+ recommended)
- npm
- A running backend API (the server in `../server`) listening on port `5000`.

Install dependencies and run the dev server:

```bash
cd client
npm install
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173/`). Open that in your browser.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint (if configured)

## Configuration / Notes

- Vite dev server config: `vite.config.js` sets a proxy so any request that starts with `/api` is forwarded to `http://localhost:5000`.
- API base URL in the client code uses relative paths (for example `'/api/bugs'`) so the Vite proxy is used in development and a full backend URL can be used in production if desired.
- The React Router `BrowserRouter` should only be mounted once (in `src/main.jsx`). `src/App.jsx` provides the inner `Routes`.
- The app entry is `index.html` at the project root of the `client` folder (Vite expects the HTML entry at the project root).

## Troubleshooting

- Blank page / white screen:
  - Open DevTools Console for errors. Common problems are unresolved imports (missing packages) or React runtime errors.
  - If you recently changed files and see HMR errors, try a hard reload (Ctrl+Shift+R) or stop and restart `npm run dev`.

- Vite port already in use:
  - If port `5173` is occupied, Vite will try the next free port (e.g. `5174`). You can kill the process using the port, or run:

```bash
npx kill-port 5173
# or
fuser -k 5173/tcp
```

- Cannot connect to backend API / CORS errors:
  - Make sure the backend server is running (`cd ../server && npm run dev`) and listening on port `5000`.
  - The dev proxy forwards `/api` requests to `http://localhost:5000` by default.

- Import errors like "Failed to resolve import 'xxx'":
  - Ensure the named dependency is installed in `client/package.json` and run `npm install` in the `client` folder.

## Recent client fixes (context for maintainers)

- Removed duplicate `BrowserRouter` mounting (keep it in `src/main.jsx` only).
- Ensured `API_URL` usage is relative (for Vite proxy) — e.g. `'/api/bugs'` in `src/store/bugSlice.js`.
- Created `client/index.html` as Vite's root HTML entry so the dev server serves `/` correctly.
- Removed accidental non-component exports from `src/App.jsx` (there was an axios instance appended to that file which interfered with HMR and runtime).

## Useful commands for debugging

Start backend and client together (two terminals):

```bash
# Terminal 1 (server)
cd server
npm run dev

# Terminal 2 (client)
cd client
npm run dev
```

Check connectivity from this machine:

```bash
# Confirm Vite server
curl -I http://localhost:5173/ || true

# Confirm backend
curl -I http://localhost:5000/api/bugs || true
```

If you want, I can start the dev servers here and stream logs to help diagnose any remaining runtime errors.

---

If anything in this README should be amended for your local workflow (ports, env, or build steps), tell me what to change and I will update this file.
