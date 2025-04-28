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
          sidebarOpen={sidebarOpen} // prop needed so that it knows if it should be open
          setSidebarOpen={setSidebarOpen} //prop needed to close the sidebar once it's open
        />

        <DesktopSidebar />

        <div className="lg:pl-20">
          {/* prop needed to open the mobile sidebar */}
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
