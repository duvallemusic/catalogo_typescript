import { useEffect, useState } from "react";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { createBook, deleteBook, getBooks, updateBookStatus } from "./services/api";
import type { Book, NewBook } from "./types/book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setError(null);
      const data = await getBooks();
      setBooks(data);
    } catch {
      setError("Nao foi possivel carregar os livros. Confira sua URL do crudcrud.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchBooks();
  }, []);

  const handleAddBook = async (newBook: NewBook) => {
    try {
      setError(null);
      const createdBook = await createBook(newBook);
      setBooks((prev) => [...prev, createdBook]);
    } catch {
      setError("Erro ao adicionar livro.");
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      setError(null);
      await deleteBook(id);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch {
      setError("Erro ao remover livro.");
    }
  };

  const handleToggleStatus = async (book: Book) => {
    const nextStatus = book.status === "Lido" ? "Nao lido" : "Lido";

    try {
      setError(null);
      await updateBookStatus(book, nextStatus);
      setBooks((prev) =>
        prev.map((item) =>
          item._id === book._id ? { ...item, status: nextStatus } : item,
        ),
      );
    } catch {
      setError("Erro ao atualizar status.");
    }
  };

  return (
    <main className="container">
      <h1>Catalogo de Livros</h1>
      <p className="help-text">
        Defina sua URL do CrudCrud no arquivo <code>.env</code> na variavel <code>VITE_API_URL</code>.
      </p>

      <BookForm onAddBook={handleAddBook} />

      {error && <p className="error">{error}</p>}

      <BookList
        books={books}
        loading={loading}
        onDelete={handleDeleteBook}
        onToggleStatus={handleToggleStatus}
      />
    </main>
  );
}

export default App;
