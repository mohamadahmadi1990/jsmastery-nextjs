import React from "react";

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-center bg-amber-50 text-4xl">ROOT NAVBAR</h1>
      {children}
    </div>
  );
};
