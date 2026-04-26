import type { Book } from "../types/book";

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => Promise<void>;
  onToggleStatus: (book: Book) => Promise<void>;
}

export function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
  const nextStatus = book.status === "Lido" ? "Nao lido" : "Lido";

  return (
    <li className="book-item">
      <div>
        <h3>{book.title}</h3>
        <p>Autor: {book.author}</p>
        <p>Status: {book.status}</p>
      </div>
      <div className="actions">
        <button type="button" onClick={() => onToggleStatus(book)}>
          Marcar como {nextStatus}
        </button>
        <button type="button" className="danger" onClick={() => onDelete(book._id)}>
          Remover
        </button>
      </div>
    </li>
  );
}
