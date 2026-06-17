//This is the main page of the application that displays a list of books. It fetches the data from the API endpoint and renders it on the page. The styling is done using Tailwind CSS for a clean and responsive design.
import { Book } from "../types";

export default async function Home() {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/books`);
  const books = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul className="list-disc pl-5">
        {books.map((book: Book) => (
          <li key={book.id} className="mb-2 bg-gray-500 p-3 rounded">
            <h2 className="text-lg font-bold text-amber-300">{book.title}</h2>
            <p className="text-gray-200">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

//Direct access to the data without fetching from an API, since we have the data in a local file. This is just for demonstration purposes and not recommended for production applications.
// import { Book } from "../types";
// import books from "../utils/db";

// export default async function Home() {

//   const allBooks = books as Book[];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Books</h1>
//       <ul className="list-disc pl-5">
//         {allBooks.map((book: Book) => (
//           <li key={book.id} className="mb-2 bg-gray-500 p-3 rounded">
//             <h2 className="text-lg font-bold text-amber-300">{book.title}</h2>
//             <p className="text-gray-200">by {book.author}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }