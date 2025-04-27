"use client";
import { DesktopSidebar } from "@/components/layout/DesktopSideBar";

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { MobileSidebar } from "./layout/MobileSidebar";
import { TopBar } from "./layout/TopBar";

type ThreeColumnLayoutProps = {
  children?: React.ReactNode; // For wrapping content if needed
};

export default function ThreeColumnLayout({
  children,
}: ThreeColumnLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <DesktopSidebar />

        <div className="lg:pl-20">
          <TopBar onMobileMenuOpen={() => setSidebarOpen(true)} />

          <main className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              {/* Main area */}
              {children}
            </div>
          </main>
        </div>

        <aside className="fixed top-16 bottom-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* CHAT - Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  );
}
