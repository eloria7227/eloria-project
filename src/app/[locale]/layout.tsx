import React from "react";

interface LocaleLayoutProps {
  children: React.ReactNode;
}

export default function LocaleLayout({
  children,
}: LocaleLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}