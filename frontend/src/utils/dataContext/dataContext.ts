import { createContext } from "react";

interface IArticle {
  id: number;
  title: string;
  Description: string;
  source: string;
  time: number;
  articleLink: string;
  image1: string;
  image2: string;
  category: string;
  clicks: number;
  test: number;
}
interface IPatchArticle {
  id: number;
  title?: string;
  Description?: string;
  source?: string;
  time?: number;
  articleLink?: string;
  image1?: string;
  image2?: string;
  category?: string;
  clicks?: number;
  test?: number;
}
interface IAddArticle {
  id: number;
  title?: string;
  Description?: string;
  source?: string;
  time?: number;
  articleLink?: string;
  image1?: string;
  image2?: string;
  category?: string;
  clicks?: number;
  test?: number;
}

interface IDataContext {
  posts: IArticle[];
  dataLoading: boolean;
  dataError: boolean;
  totalPosts: number;
  getPosts: () => Promise<string>;
  patchPost: (obj: IPatchArticle) => Promise<string>;
  addPost: (obj: IAddArticle) => Promise<string>;
  deletePost: (id: number) => Promise<string>;
}

const DataContext = createContext<IDataContext>({
  posts: [],
  dataLoading: false,
  dataError: false,
  totalPosts: 0,
  getPosts: () => new Promise<string>((resolve, reject) => {}),
  patchPost: (obj: IPatchArticle) =>
    new Promise<string>((resolve, reject) => {}),
  addPost: (obj: IAddArticle) => new Promise<string>((resolve, reject) => {}),
  deletePost: (id: number) => new Promise<string>((resolve, reject) => {}),
});

