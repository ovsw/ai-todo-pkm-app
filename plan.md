

/components
  /layout
    AppLayout.js         # Main layout wrapping pages
    SectionCard.js       # Container for dashboard sections (like Upcoming Tasks)
    TimelineGroup.js     # Groups notes by date with line/dot
  /navigation
    BottomNavBar.js      # The main bottom navigation
    HeaderBar.js         # The header for each page
    Dropdown.js          # Filter dropdown (e.g., for Tasks/Notes)
  /items                 # Components representing list/card items
    ListItem.js          # Generic list item (e.g., Inbox)
    TaskItem.js          # Task item with checkbox, tags, etc.
    NoteCard.js          # Card displaying note preview in timeline/lists
    ProjectBadge.js      # Small badge for project names
  /chat                  # Components specific to the chat interface
    ChatMessage.js       # Individual chat message bubble
    ChatInput.js         # Textarea input bar for chat
  /elements              # Smaller, general-purpose UI elements
    IconButton.js        # Generic button with only an icon
    ActionButton.js      # Button with icon and text (like Quick Actions)
    Tag.js               # Small tag/pill element (e.g., for project/date)
    CaptureInput.js      # Simple input + button (e.g., Inbox capture)

/pages
  _app.js                # Next.js custom App component (wraps all pages)
  _document.js           # Next.js custom Document component (optional, for html/head)
  index.js               # Page 2: Home / Dashboard
  inbox.js               # Page 1: Inbox / Quick Capture
  tasks.js               # Page 3: Tasks Screen
  notes.js               # Page 4: Notes Screen
  chat.js                # Page 5: AI Chat Screen
  /api                   # Optional: For Next.js API routes if needed
    # ... your API endpoints ...