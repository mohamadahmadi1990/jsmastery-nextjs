import React from 'react'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className='bg-amber-50 text-center text-4xl'>ROOT NAVBAR</h1>
      {children}
    </div>
  )
}
