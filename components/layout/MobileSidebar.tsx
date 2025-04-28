import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { mainNavigation } from "@/data/navigationData";
import { cn } from "@/lib/utils";
import Image from "next/image";

type MobileSidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export function MobileSidebar({
  sidebarOpen,
  setSidebarOpen,
}: MobileSidebarProps) {
  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="left"
        className="w-[300px] [&>button:first-of-type]:hidden overflow-y-auto bg-gray-900 px-6 py-2  lg:hidden"
      >
        <div className="flex h-16 shrink-0 items-center justify-between">
          <Image
            width={32}
            height={32}
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          />
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close sidebar"
              className="-mr-2 text-gray-400"
            >
              <X className="size-6" />
            </Button>
          </SheetClose>
        </div>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="-mx-2 flex-1 space-y-4">
            {mainNavigation.map((item) => (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start rounded-md font-semibold h-14",
                    item.current
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className="mr-3 ml-2 size-6 shrink-0"
                  />
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
