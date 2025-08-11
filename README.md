# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app (legacy):
   `npm run dev`

4. Run the refactored app (feature flag):
   `npm run dev:new`

Notes
- Toggle new app rendering with env var `VITE_USE_NEW_APP=true` (see `index.tsx`).
- Contracts live under `src/contracts`, systems under `src/core/systems`, and UI under `src/ui`.
