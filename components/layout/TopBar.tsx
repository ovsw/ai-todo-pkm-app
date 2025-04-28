import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu as MenuIcon, ChevronDownIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userNavigation } from "@/data/navigationData"; // Import userNavigation

// Define props needed from the parent
type TopBarProps = {
  onMobileMenuOpen: () => void; // Function to open the mobile sidebar
};

export function TopBar({ onMobileMenuOpen }: TopBarProps) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <Button
        onClick={onMobileMenuOpen} // Use the prop here
        aria-label="Open sidebar"
        className="text-gray-700 lg:hidden"
        variant="ghost"
        size="icon"
      >
        <MenuIcon aria-hidden="true" className="size-6" />
      </Button>

      {/* Separator */}
      <div className="lg:hidden h-6">
        <Separator orientation="vertical" />
      </div>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        {/* Search Form */}

        <form action="#" method="GET" className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>

          <div className="relative w-full py-3.5">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type=""
              placeholder="Search..."
              name="search"
              className="h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            />
          </div>
        </form>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notification Button */}
          <Button
            aria-label="View notifications"
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-gray-500"
          >
            <Bell aria-hidden="true" className="size-6" />
          </Button>

          <div className="hidden lg:block lg:h-6">
            <Separator orientation="vertical" />
          </div>

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open user menu"
                variant="link"
                className="-m-1.5  p-1.5 font-semibold"
              >
                <Avatar className="mr-1">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Ovi Savescu
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-1 size-5 text-gray-400"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              {userNavigation.map((item) => (
                <DropdownMenuItem key={item.name}>{item.name}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
