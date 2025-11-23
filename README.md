# Bug Tracker MERN App

## Installation
1. Clone and run `npm run install-all` (installs deps for root, client, server).
2. Set up MongoDB and add to `server/.env` (e.g., MONGO_URI=mongodb://localhost:27017/bugtracker).

## Running
- Backend: `cd server && npm start` (runs on port 5000).
- Frontend: `cd client && npm run dev` (runs on port 3000).
- Full app: Use `concurrently` in root `package.json` for both.

## Tests
- Unit: `npm run test:unit` (Jest for isolated functions/components).
- Integration: `npm run test:integration` (API/UI flows).
- E2E: Manual or add Cypress later.
- Coverage: Run `jest --coverage` (aim for 70%+).

## Debugging
- Frontend: Use Chrome DevTools (console for logs, network for API).
- Backend: Use `node --inspect server/index.js` (Node inspector for breakpoints).
- Errors: Check console logs; error boundaries handle React crashes.

## Testing Approach
Unit tests isolate functions; integration tests API/UI; mocks used for DB/API.