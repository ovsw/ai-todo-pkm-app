"use client";
import { useState } from "react";

import { DesktopSidebar } from "@/components/layout/DesktopSideBar";
import { MobileSidebar } from "./layout/MobileSidebar";
import { TopBar } from "./layout/TopBar";
import { SecondaryColumn } from "./layout/SecondaryColumn";

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

        <SecondaryColumn />
      </div>
    </>
  );
}
