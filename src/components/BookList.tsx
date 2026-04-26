import { BookItem } from "./BookItem";
import type { Book } from "../types/book";

interface BookListProps {
  books: Book[];
  loading: boolean;
  onDelete: (id: string) => Promise<void>;
  onToggleStatus: (book: Book) => Promise<void>;
}

export function BookList({ books, loading, onDelete, onToggleStatus }: BookListProps) {
  if (loading) {
    return <p>Carregando livros...</p>;
  }

  if (!books.length) {
    return <p>Nenhum livro cadastrado ainda.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookItem key={book._id} book={book} onDelete={onDelete} onToggleStatus={onToggleStatus} />
      ))}
    </ul>
  );
}
