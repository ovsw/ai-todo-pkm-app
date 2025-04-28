import {
  HomeIcon,
  InboxIcon as CaptureIcon,
  BotMessageSquare as ChatIcon,
  CircleCheck as TasksIcon,
  NotepadText as NotesIcon,
  Target as ProjectIcon,
} from "lucide-react";
// Define the type for a navigation item
export type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  current: boolean;
};

// Export the navigation array
export const mainNavigation: NavigationItem[] = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Capture", href: "#", icon: CaptureIcon, current: false },
  {
    name: "Chat",
    href: "#",
    icon: ChatIcon,
    current: false,
  },
  { name: "Tasks", href: "#", icon: TasksIcon, current: false },
  { name: "Notes", href: "#", icon: NotesIcon, current: false },
  { name: "Projects", href: "#", icon: ProjectIcon, current: false },
];

// Define the type for user navigation items
export type UserNavigationItem = {
  name: string;
  href: string;
};

// Export the user navigation array
export const userNavigation: UserNavigationItem[] = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
