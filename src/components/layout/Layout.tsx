import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import PageTransition from "./PageTransition";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#061B1A]
        text-white
      "
    >
      <Background />

      <Header />

      <main
        className="
          relative
          z-10
          pt-28
        "
      >
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}