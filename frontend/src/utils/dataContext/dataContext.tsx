import axios from "axios";
import { createContext, useContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import {
  IAddArticle,
  IArticle,
  IDataContext,
  IPatchArticle,
  dataContextInitial,
} from "./types";

const DataContext = createContext<IDataContext>(dataContextInitial);

type Props = {
  children: React.ReactNode;
};

export const DataContextProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<IArticle[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<boolean>(false);
  const [totalPosts, setTotalPosts] = useState<number>(0);

  const getPosts = () => {
    let params = window.location.href;
    params = params.slice(params.indexOf("?"));
    let url = baseUrl + "/posts" + params;
    console.log(url);
    return new Promise<string>((resolve, reject) => {
      setDataLoading(true);
      axios
        .get(url)
        .then((res) => {
          const { "x-total-count": total } = res.headers;
          setPosts(res.data);
          setDataLoading(false);
          setDataError(false);
          resolve("success");
          setTotalPosts(total);
        })
        .catch(() => {
          setDataError(true);
          setDataLoading(false);
          reject("failed");
        });
    });
  };

  // useEffect(() => {
  //   console.log(posts);
  // }, []);

  const patchPost = (obj: IPatchArticle) => {
    let { id } = obj;
    setDataLoading(true);
    return new Promise<string>((resolve, reject) => {
      axios
        .patch(baseUrl + `/posts/${id}`, obj)
        .then(async () => {
          await getPosts();
          setDataLoading(false);
          setDataError(false);
          resolve("success");
        })
        .catch(() => {
          setDataLoading(false);
          setDataError(true);
          reject("fail");
        });
    });
  };

  const addPost = (obj: IAddArticle) => {
    setDataLoading(true);
    return new Promise<string>((resolve, reject) => {
      axios
        .post(baseUrl + `/posts`, obj)
        .then(async () => {
          await getPosts();
          setDataLoading(false);
          setDataError(false);
          resolve("success");
        })
        .catch(() => {
          setDataLoading(false);
          setDataError(true);
          reject("fail");
        });
    });
  };

  const deletePost = (id: number) => {
    setDataLoading(true);
    return new Promise<string>((resolve, reject) => {
      axios
        .delete(baseUrl + `/posts/${id}`)
        .then(async () => {
          await getPosts();
          setDataLoading(false);
          setDataError(false);
          resolve("success");
        })
        .catch(() => {
          setDataLoading(false);
          setDataError(true);
          reject("fail");
        });
    });
  };

  let contextValue: IDataContext = {
    posts,
    dataLoading,
    dataError,
    totalPosts,
    getPosts,
    patchPost,
    addPost,
    deletePost,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
