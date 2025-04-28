// components/layout/DesktopSidebar.tsx
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming you have a utility for classNames
import { mainNavigation } from "@/data/navigationData";
import { Button } from "@/components/ui/button";

export function DesktopSidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
      <div className="flex h-16 shrink-0 items-center justify-center">
        <Image
          alt="Alexander AI"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-auto"
          width={24}
          height={24}
        />
      </div>
      <nav className="mt-8">
        <ul role="list" className="flex flex-col items-center space-y-4">
          {mainNavigation.map((item) => (
            <li key={item.name}>
              {/* If you want it to act as a link, you might wrap it in <Link> from next/link href={item.href} */}
              {/*  <Link href={item.href} passHref> ... </Link> // Option 1 */}
              <Button
                aria-label={item.name}
                variant="ghost"
                size="icon"
                className={cn(
                  item.current
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white",
                  "group size-10 p-3"
                )}
              >
                <item.icon aria-hidden="true" className="size-6 shrink-0" />
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
