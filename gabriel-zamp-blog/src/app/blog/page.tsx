"use client";

import { HighlightedArticle } from "@/components/highlighted-article";
import { AllBlogsList } from "@/components/all-blogs-list";
import { PostProvider } from "@/contexts/PostContext";
import { PostsSearchBar } from "@/components/search-input";

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#1A1A1A] ">
        <div className="w-10/12 mx-auto py-5 xl:w-8/12">
          <div className="border-t border-white border-b mb-10">
            <h1 className="text-7xl uppercase text-center my-2 lg:text-9xl">
              Blog
            </h1>
          </div>
          <PostProvider>
            <HighlightedArticle />

            <AllBlogsList />
          </PostProvider>
        </div>
      </div>
    </>
  );
}
