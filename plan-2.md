**Phase 1: Foundation & Core Data**

1.  **Setup Project Structure:**

    - Initialize your chosen frontend framework (e.g., Next.js).
    - Set up basic project configuration (TypeScript, ESLint, Prettier).
    - Install **shadcn/ui** and configure it, as many components (including the chat kit) will depend on it.

2.  **Integrate Convex:**

    - Add Convex to your project (**npx convex dev**).
    - **Define Initial Schemas:** In your **convex/schema.ts**, define the basic structures for your core entities: **notes**, **tasks**, **projects**, **ideas**. Keep them simple initially; you can add more fields later.

      - *Why first?* Everything revolves around data. Defining schemas early ensures your backend structure is clear before you write code that depends on it. It forces you to think about the relationships between entities.

    - **Implement Basic Authentication (Optional but Recommended Early):** If you plan on having users, set up authentication (e.g., using Clerk with Convex). It's easier to integrate early than to retrofit later.

3.  **Build Core CRUD for ONE Entity (e.g., Notes):**

    - Create Convex mutation and query functions for creating, reading, updating, and deleting notes.
    - Build the basic UI components (using **shadcn/ui**) to list notes, view a single note, and create/edit a note form.
    - Connect the UI to the Convex functions using Convex hooks (**useQuery**, **useMutation**).
    - *Why?* This validates the entire loop: Frontend -> Convex Client -> Convex Backend -> Database -> Frontend Update. It ensures your fundamental setup is working correctly before adding more complexity. You'll iron out basic data flow issues here.

**Phase 2: Basic AI Chat Integration**

1.  **Setup Basic Chat Backend:**

    - Create a Convex HTTP Action (e.g., **convex/chat.ts**) that will handle chat requests.
    - Inside this action, initially, just take the incoming messages, add a placeholder system message (if needed), and call your chosen LLM (e.g., OpenAI) using **fetch**. *Do not worry about context injection yet*.
    - Make the action stream the LLM response back.
    - Define a schema for **chatMessages** in **convex/schema.ts** to store the conversation history (user messages, assistant messages, potentially associated project/note ID).
    - Modify the HTTP action to save the user message and the AI response to the **chatMessages** table *after* successfully getting the response.

2.  **Integrate Chat Frontend:**

    - Add the **shadcn-chatbot-kit** to your UI.
    - Install the Vercel AI SDK (**ai**).
    - Use the **useChat** hook from the Vercel AI SDK. Configure its **api** option to point to your Convex HTTP Action endpoint.
    - Create a basic chat page or component that uses the chatbot kit and the **useChat** hook to display the conversation and allow user input.
    - *Why now?* You've proven the core data layer works. Now, you introduce the AI component in isolation. By *not* adding context yet, you focus solely on getting the LLM communication via Convex and the UI working.

**Phase 3: Enhance and Expand**

1.  **Implement Remaining Core CRUD:**

    - Build out the CRUD functionality and UI for **tasks**, **projects**, and **ideas**, similar to how you did for notes.
    - Implement relationships (e.g., linking tasks/notes to projects). Update your Convex schemas and functions accordingly.
    - *Why?* You now have the core PKM features and more data within your system.

2.  **Add Context to AI Chat (RAG):**

    - **Embeddings (if needed):** Decide if you need semantic search. If so, set up vector embeddings:

      - Create a Convex action to generate embeddings for your notes/tasks/ideas (e.g., using OpenAI's embedding API) whenever they are created or updated.
      - Store these embeddings in your Convex tables.
      - Add a vector index to your Convex schema for the relevant tables/fields.

    - **Modify Chat Action:** Enhance your **convex/chat.ts** HTTP action:

      - Before calling the LLM, use the incoming message (and potentially recent history) to query Convex.
      - Fetch relevant **notes**, **tasks**, etc. based on keywords or (more powerfully) using vector search on the embeddings.
      - Construct a more detailed prompt for the LLM, including the fetched context.
      - Call the LLM with the context-enhanced prompt.

    - *Why now?* The chat is functional, and you have core data. Now you make the chat *smart* by connecting it to the user's knowledge base.

3.  **Refine and Iterate:**

    - Improve UI/UX based on testing.
    - Add more advanced AI features (summarization, task generation from notes, etc.) using Convex actions.
    - Implement linking between different entity types in the UI.
    - Add features like search (keyword and/or semantic).
    - Write tests.

**Summary Rationale:**

- **Foundation First:** Start with the backend (Convex) and data models (Schemas). This is the bedrock.
- **Validate Core Loop Early:** Implement one simple CRUD feature end-to-end to ensure the basic plumbing works.
- **Isolate Complexities:** Introduce the AI chat without context first to tackle the LLM integration and streaming UI separately.
- **Build Incrementally:** Add core features steadily, then enhance the AI with context once data exists.
- **Data is Key:** The AI features become truly useful once they can leverage the user's notes, tasks, and projects stored in Convex.

This path builds complexity layer by layer, allowing you to test and validate each stage before moving to the next, thus minimizing potential roadblocks and making debugging easier.
