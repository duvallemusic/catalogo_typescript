import axios from "axios";
import type { Book, NewBook } from "../types/book";

const API_URL = import.meta.env.VITE_API_URL as string;

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>(API_URL);
  return response.data;
};

export const createBook = async (book: NewBook): Promise<Book> => {
  const response = await axios.post<Book>(API_URL, book);
  return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateBookStatus = async (
  book: Book,
  status: Book["status"],
): Promise<void> => {
  await axios.put(`${API_URL}/${book._id}`, {
    title: book.title,
    author: book.author,
    status,
  });
};
