// app/loading.tsx

export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-black text-white'>
      <div className='flex flex-col items-center gap-6'>
        <div className='relative flex h-24 w-24 items-center justify-center'>
          <div className='absolute h-full w-full rounded-full border-4 border-white/20' />

          <div className='absolute h-full w-full animate-spin rounded-full border-4 border-transparent border-t-white' />

          <div className='h-12 w-12 animate-pulse rounded-full bg-white/90' />
        </div>

        <div className='flex items-center gap-1 text-lg font-medium'>
          <span>Loading</span>
          <span className='animate-bounce'>.</span>
          <span className='animate-bounce [animation-delay:150ms]'>.</span>
          <span className='animate-bounce [animation-delay:300ms]'>.</span>
        </div>
      </div>
    </div>
  )
}
