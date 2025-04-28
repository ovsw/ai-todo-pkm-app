# Plan for Adding AI Chat Interface using shadcn-chatbot-kit and Vercel AI SDK

This plan outlines the steps to integrate an AI chat interface within the `SecondaryColumn` component, utilizing `shadcn-chatbot-kit` for UI and the Vercel AI SDK (`vercel/ai`) for state management and backend communication.

**Prerequisites:**

- Install necessary packages: `ai`, `@blazity/shadcn-chatbot`.
- Ensure you have a backend API route ready to handle chat requests from the Vercel AI SDK (e.g., `/api/chat`).

**Steps:**

1.  **Create API Route for Vercel AI SDK:**

    - Create a new Next.js API route (e.g., `app/api/chat/route.ts`).
    - Implement the route handler using your chosen AI model provider (e.g., OpenAI, Anthropic) and the Vercel AI SDK helpers to process incoming messages and stream back responses. _Refer to Vercel AI SDK documentation for specific implementation details based on your backend._

2.  **Create `AIChatInterface.tsx` Component:**

    - Create a new file: `components/AIChatInterface.tsx`.
    - Make it a Client Component (`"use client";`).
    - Import `useChat` from `ai/react`.
    - Import necessary components from `@blazity/shadcn-chatbot`: `Chat`, `ChatInput`, `ChatMessage`.
    - Call the `useChat()` hook to get `messages`, `input`, `handleInputChange`, `handleSubmit`, `isLoading`, etc. Point it to your API route (e.g., `useChat({ api: '/api/chat' })`).

3.  **Implement Chat UI using `shadcn-chatbot-kit`:**

    - Use the `Chat` component as the main container. Pass the `messages` array from `useChat` to its `messages` prop.
    - Configure other `Chat` props as needed (e.g., `isLoading`, potentially custom renderers).
    - Use the `ChatInput` component for the input area. Pass `input`, `handleInputChange`, and `handleSubmit` from `useChat` to the corresponding props (`value`, `onChange`, `onSubmit`).
      - _Note:_ You may need to customize `ChatInput` or handle the "Voice" button separately if it's not directly supported by the component's default structure. The gradient background should be applied to the parent container of `Chat`.
    - The `Chat` component likely uses `ChatMessage` internally to render individual messages based on the `role` ('user' or 'assistant') provided by `useChat`. You might need to customize `ChatMessage` styling via props or CSS if the default doesn't match the blue/gray requirement exactly.

4.  **Integrate into `SecondaryColumn.tsx`:**

    - Import the `AIChatInterface` component at the top of `components/layout/SecondaryColumn.tsx`.
    - Remove the `overflow-y-auto` class from the `<aside>` element's `className` (the `Chat` component will handle its own scrolling).
    - Remove the placeholder `<p>` tag.
    - Render the `<AIChatInterface />` component inside the `<aside>`. Ensure the `<aside>` allows the `AIChatInterface` to fill its height (which the fixed positioning and `h-full` on the chat component should handle).

5.  **Refinement & Styling:**
    - Apply the `linear-gradient` background to the container _around_ the `Chat` component within `AIChatInterface` or potentially configure it via `Chat` component props if available.
    - Adjust styling of `ChatMessage` (if needed) to match the desired user (blue/white) and AI (gray/dark) bubble styles. This might involve passing custom render functions or using CSS overrides.
    - Implement the "Voice" button functionality. This will likely involve adding a separate button next to or within the `ChatInput` area and wiring it up to the appropriate voice handling logic (outside the scope of `useChat`).
    - Handle loading states using the `isLoading` boolean from `useChat`.
