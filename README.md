
# SOC Assistant Chat UI.

A modern, minimalistic, production-grade chat UI for a Security Operations Center (SOC) Assistant. Connects to a FastAPI backend.

## Features

- Chat-style interface for security questions (natural language)
- Distinct chat bubbles for user/assistant
- Minimalist, professional light theme (Tailwind CSS + shadcn)
- Sidebar/header with branding and quick actions
- "Assistant is typing..." animated loading state
- Handles error states (e.g., server down)
- Reactive, smooth experience, easy to extend

## Tech Stack

- React + Vite
- Tailwind CSS + Inter font
- shadcn/ui (react)
- Axios (API calls)
- TypeScript

## Getting Started (Development)

1. **Install Node.js** (LTS recommended)
2. **Clone this repo**  
   ```
   git clone <repo-url>
   cd <project>
   ```
3. **Install dependencies**  
   ```
   npm install
   ```
4. **Start the development server**  
   ```
   npm run dev
   ```
5. **Connect to FastAPI backend**
   - Update the `src/api/chat.ts` `BASE_URL` if your backend is deployed elsewhere.

**Backend API contract:**  
`POST /chat`  
Payload:
```json
{ "message": "<user_message>" }
```
Response:
```json
{ "response": "<assistant_response>" }
```

## Customization

- Update branding or actions in `src/components/Header.tsx`.
- Adjust styles via Tailwind in component classes.
- Add/modify quick actions as needed.

## Deployment

Standard React/Vite build.  
```
npm run build
```

## License

MIT
