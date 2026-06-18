type PageProps = {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
    name?: string
    gender?: string
  }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params
  const { name = 'N/A', gender = 'N/A' } = await searchParams

  return (
    <div>
      <h1>User {id}</h1>

      <p>Tab: {name}</p>
      <p>Sort: {gender}</p>
    </div>
  )
}

// ########################################

// 'use client';

// import { useParams, useSearchParams } from 'next/navigation';

// export default function Page() {
//   const { id } = useParams<{ id: string }>();
//   const searchParams = useSearchParams();

//   const name = searchParams.get('name') ?? 'N/A';
//   const gender = searchParams.get('gender') ?? 'N/A';

//   return (
//     <main>
//       <h1>User {id}</h1>

//       <p>Name: {name}</p>
//       <p>Gender: {gender}</p>
//     </main>
//   );
// }
