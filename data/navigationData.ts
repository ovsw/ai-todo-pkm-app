import {
  HomeIcon,
  InboxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  DocumentDuplicateIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline"; // Or switch to Lucide icons later

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
  { name: "Capture", href: "#", icon: InboxArrowDownIcon, current: false },
  {
    name: "Chat",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
    current: false,
  },
  { name: "Tasks", href: "#", icon: CheckBadgeIcon, current: false },
  { name: "Notes", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Projects", href: "#", icon: FolderOpenIcon, current: false },
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
