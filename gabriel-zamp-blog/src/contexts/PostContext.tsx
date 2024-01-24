import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Post } from "@/types/Post";

type PostContextType = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  convertDate: (isoDate: Date) => void;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  function convertDate(isoDate) {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Date(isoDate).toLocaleDateString("pt-BR", options);
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://institucional.conasems.simoa.dev/noticias/")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        setLoading(false);
      })
      .catch(() => {
        console.log("Houve um erro na requisição");
        setLoading(false);
      });
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, loading, setLoading, convertDate }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};
