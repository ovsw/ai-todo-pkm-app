# Plan for Adding AI Chat Interface

This plan outlines the steps to integrate an AI chat interface within the `SecondaryColumn` component, utilizing Shadcn UI components.

1.  **Create `AIChatInterface.tsx` Component:**

    - Create a new file: `components/AIChatInterface.tsx`.
    - Import necessary Shadcn components: `Card`, `CardContent`, `CardFooter`, `Input`, `Button`, `ScrollArea`.
    - Set up the basic component structure using React function component syntax.
    - Use a main `div` or `Card` with Flexbox (`flex flex-col h-full`) to fill the available height within `SecondaryColumn`. Apply the specified `linear-gradient` background here.
    - Create the message display area within `CardContent`:
      - Use Shadcn's `ScrollArea` component to handle scrolling. Configure its height to grow (`flex-grow`).
      - Inside `ScrollArea`, have a `div` for padding (`p-4`) and message spacing (`space-y-4`).
    - Create the input area within `CardFooter`:
      - Use Flexbox (`flex w-full items-center space-x-2`) to arrange the input field and buttons.
      - Add a Shadcn `Input` component (`flex-grow`, placeholder).
      - Add two Shadcn `Button` components (Send, Voice), potentially using icons.

2.  **Add State Management to `AIChatInterface`:**

    - Use `useState` to manage an array of messages (e.g., `messages`, initially empty or with mock data like `[{ id: 1, sender: 'ai', text: 'Hello!' }]`). Define a type/interface for the message object (`{ id: number, sender: 'user' | 'ai', text: string }`).
    - Use `useState` to manage the current value of the Shadcn `Input` (e.g., `inputValue`).

3.  **Implement Message Rendering:**

    - Inside the `ScrollArea`'s content `div`, map over the `messages` state array.
    - For each message, render a `div` wrapper to handle alignment (`flex w-full` with `justify-end` or `justify-start`).
    - Inside the wrapper, render the message bubble `div`.
    - Apply distinct background and text colors (Tailwind) for user (`bg-blue-500 text-white`) and AI (`bg-gray-200 text-gray-800`) bubbles.
    - Add padding (`px-4 py-2`) and rounded corners (`rounded-lg`) to the bubbles.

4.  **Implement Basic Input Handling:**

    - Add an `onChange` handler to the Shadcn `Input` to update the `inputValue` state.
    - Add an `onClick` handler to the "Send" `Button`.
    - Add an `onClick` handler to the "Voice" `Button`.

5.  **Modify `SecondaryColumn.tsx`:**

    - Import the `AIChatInterface` component at the top.
    - Remove the `overflow-y-auto` class from the `<aside>` element's `className`.
    - Remove the placeholder `<p>` tag.
    - Render the `<AIChatInterface />` component inside the `<aside>`.

6.  **Implement Send Message Logic:**

    - In the "Send" `Button`'s `onClick` handler within `AIChatInterface`:
      - Check if `inputValue.trim()` is not empty.
      - Create a new message object for the user's message (use a simple ID generation for now, like `Date.now()`).
      - Update the `messages` state by adding the new user message.
      - Clear the `inputValue` state.
      - _(Placeholder for AI response)_: Add logic to simulate an AI response (e.g., using `setTimeout` to add an AI message to the state after a short delay).

7.  **Refinement:**
    - Adjust Shadcn component variants and Tailwind classes for desired look and feel.
    - Consider adding icons to the buttons (e.g., Send icon, Microphone icon).
    - Ensure accessibility attributes are used correctly.
