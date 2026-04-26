export type BookStatus = "Lido" | "Nao lido";

export interface Book {
  _id: string;
  title: string;
  author: string;
  status: BookStatus;
}

export interface NewBook {
  title: string;
  author: string;
  status: BookStatus;
}
