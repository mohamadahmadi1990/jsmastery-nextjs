import React from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header className='text-center bg-amber-300 text-amber-700'>Dashboard</header>
      <main>{children}</main>
    </div>
  );
}