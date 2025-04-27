<!-- Status: Steps 1-4 Completed. Ready to begin Step 5: Incremental Conversion, starting with TopBar.tsx. -->

~~1. **Preparation & Setup:**~~

    ~~- **Get the Code:** Have the original Tailwind Plus component code ready.~~
    ~~- **Next.js Project:** Ensure your Next.js project is set up.~~
    ~~- **Install Shadcn/ui:** If you haven't already, initialize Shadcn/ui in your Next.js project: **pnpm dlx shadcn@latest init**.~~
    ~~- **Install Lucide Icons:** `pnpm add lucide-react`.~~
    ~~- **Install Base Components:** Think about the core Shadcn components you'll likely need based on a quick look at the original component (e.g., **button**, **dialog**, **dropdown-menu**, **separator**, **avatar**). Install them using **pnpm dlx shadcn@latest add ...** . You can always add more later.~~

~~2. **Analyze the Existing Component:**~~

    ~~- **Understand the Structure:** Read through the original component's JSX and Tailwind classes. Identify the main structural elements: Mobile Sidebar (Dialog), Desktop Sidebar (Static Div), Top Bar, Main Content Area, Secondary Column (aside).~~
    ~~- **Identify Layout Logic:** Pay close attention to the Tailwind classes responsible for the layout and responsiveness (`lg:`, `xl:` prefixes, `fixed`, padding adjustments).~~
    ~~- **Identify UI Elements:** List out the distinct interactive or styled elements (Headless UI Dialog/Menu, buttons, icons, avatar, separators) as candidates for replacement.~~

~~3. **Decompose into Smaller React Components (Crucial Step):**~~

    ~~- **Break It Down:** Refactor the *existing* large component into smaller, logical React components.~~
    ~~- **Components Created:**~~
        ~~- `AppLayout.tsx` (Previously `ThreeColumnLayout.tsx`): Orchestrator.~~
        ~~- `MobileSidebar.tsx`: Contains the Headless UI `Dialog` logic.~~
        ~~- `DesktopSidebar.tsx`: Contains the static icon sidebar `div`.~~
        ~~- `TopBar.tsx`: Contains the sticky top bar.~~
        ~~- `SecondaryColumn.tsx`: Contains the `aside` element.~~
        ~~- `MainContent.tsx` (implicitly handled by `children` in `AppLayout` for now).~~
    ~~- **Props:** Defined props for passing state (`sidebarOpen`) and callbacks (`setSidebarOpen`, `onMobileMenuOpen`) between components.~~
    ~~- **Goal:** Achieved - layout functions identically, but code is organized.~~

~~4. **Tackle the Overall Layout Structure (AppLayout.tsx):**~~

    ~~- **Focus on Containers:** Reviewed the top-level container (`AppLayout.tsx`) and confirmed it uses standard elements (`div`, `main`, `aside`) and Tailwind for structure.~~
    ~~- **Shadcn is NOT for Layout Primitives:** Confirmed - Shadcn/ui is not used for the main page structure, only Tailwind.~~
    ~~- **Placeholders:** Confirmed - The decomposed components (`MobileSidebar`, `DesktopSidebar`, etc.) are correctly placed within the Tailwind structure.~~

5.  **Convert Components Incrementally (Isolate & Replace):**

    - **Pick One Component:** Start with one of the smaller, decomposed components (e.g., `TopBar.tsx`).
    - **Identify Shadcn Equivalents:** Look at the UI elements _within_ the chosen component.
      - Mobile Menu Button (`<button>` + `Bars3Icon`) -> Shadcn `Button` + Lucide `Menu` icon.
      - Notification Button (`<button>` + `BellIcon`) -> Shadcn `Button` + Lucide `Bell` icon.
      - Profile Dropdown (`<Menu>`) -> Shadcn `DropdownMenu`.
      - Avatar (`<Image>`) -> Shadcn `Avatar`.
      - Separators (`<div>`) -> Shadcn `Separator`.
      - Search Input (`<input>`) -> Shadcn `Input`.
      - Navigation links (in Sidebars) -> Shadcn `Button` (`variant="ghost"` or `link`) or styled `<a>`.
    - **Replace and Style:** Swap the original HTML/Tailwind/HeadlessUI elements with the chosen Shadcn components. Use the `className` prop for adjustments.
    - **Replace Icons:** Swap Heroicons for `lucide-react`.
    - **Test:** Render and test the component after changes.

6.  **Repeat for Other Components:**

    - Move on to the next decomposed component (`DesktopSidebar.tsx`, `MobileSidebar.tsx`, `SecondaryColumn.tsx`).
    - Repeat the process: identify UI elements, find Shadcn equivalents, replace, style, replace icons, and test.

7.  **Refine Styling and Responsiveness:**

    - Once the major components are converted, review the overall look and feel.
    - Adjust Tailwind classes (`className`) on Shadcn components as needed.
    - Double-check responsiveness at all breakpoints. Consider mobile-specific components like Shadcn `Sheet` or `Drawer` if needed (e.g., for `MobileSidebar`).
