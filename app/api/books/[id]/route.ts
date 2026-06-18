import books from '@/app/utils/db'

export async function PUT(request: Request) {
  const { id, title, author } = await request.json()
  const bookIndex = books.findIndex((book) => book.id === id)
  if (bookIndex === -1) {
    return Response.json({ message: 'Book not found' }, { status: 404 })
  }
  books[bookIndex] = { ...books[bookIndex], title, author }
  return Response.json(books[bookIndex])
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  const bookIndex = books.findIndex((book) => book.id === id)
  if (bookIndex === -1) {
    return Response.json({ message: 'Book not found' }, { status: 404 })
  }
  books.splice(bookIndex, 1)
  return Response.json({ message: 'Book deleted successfully' })
}
