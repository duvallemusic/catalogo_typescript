import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { BookStatus, NewBook } from "../types/book";

interface BookFormProps {
  onAddBook: (book: NewBook) => Promise<void>;
}

const INITIAL_FORM: NewBook = {
  title: "",
  author: "",
  status: "Nao lido",
};

export function BookForm({ onAddBook }: BookFormProps) {
  const [formData, setFormData] = useState<NewBook>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.author.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onAddBook({
        title: formData.title.trim(),
        author: formData.author.trim(),
        status: formData.status as BookStatus,
      });
      setFormData(INITIAL_FORM);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Adicionar Livro</h2>
      <input
        type="text"
        name="title"
        placeholder="Titulo"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={formData.author}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Nao lido">Nao lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Salvando..." : "Adicionar"}
      </button>
    </form>
  );
}
