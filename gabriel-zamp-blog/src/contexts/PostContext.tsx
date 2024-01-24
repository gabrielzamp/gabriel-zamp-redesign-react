import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Post } from "@/types/Post";
import { PostActions, postReducer } from "@/app/reducers/postReducer";

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useEffect<Post[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://institucional.conasems.simoa.dev/noticias/")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setPosts(json);
      })
      .catch(() => {
        setLoading(false);
        console.log("Houve um erro na requisição");
      });
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};
