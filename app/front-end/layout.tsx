import ThreeColumnLayout from "@/components/ThreeColumnLayout";
import React from "react";

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThreeColumnLayout>{children}</ThreeColumnLayout>;
}
