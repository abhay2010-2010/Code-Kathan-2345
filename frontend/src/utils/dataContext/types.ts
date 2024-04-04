export interface IArticle {
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
  test?: number;
}
export interface IPatchArticle {
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
export interface IAddArticle {
  id?: number;
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

type GetPosts = () => Promise<string>;
type PatchPost = (obj: IPatchArticle) => Promise<string>;
type AddPost = (obj: IAddArticle) => Promise<string>;
type DeletePost = (id: number) => Promise<string>;

export interface IDataContext {
  posts: IArticle[];
  dataLoading: boolean;
  dataError: boolean;
  totalPosts: number | undefined;
  getPosts: GetPosts;
  patchPost: PatchPost;
  addPost: AddPost;
  deletePost: DeletePost;
}

export const dataContextInitial: IDataContext = {
  posts: [],
  dataLoading: false,
  dataError: false,
  totalPosts: 0,
  getPosts: () => new Promise<string>(() => {}),
  patchPost: () => new Promise<string>(() => {}),
  addPost: () => new Promise<string>(() => {}),
  deletePost: () => new Promise<string>(() => {}),
};
