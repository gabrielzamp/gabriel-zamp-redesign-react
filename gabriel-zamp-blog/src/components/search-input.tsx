import { usePosts } from "@/contexts/PostContext";
import { useState } from "react";

export const PostsSearchBar = () => {
  const { setPosts, posts } = usePosts();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (evt) => {
    evt.preventDefault();

    const searchInputLower = searchInput.toLowerCase();
    const filteredPosts = posts?.response?.docs?.filter((post) =>
      post.title.toLowerCase().includes(searchInputLower)
    );

    setPosts({ response: { docs: filteredPosts } });
  };

  return (
    <>
      <form className="pb-10 pt-5" onSubmit={handleSearchInput}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            type="search"
            id="default-search"
            className="block w-full py-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search posts..."
            required
          />
          <button
            onClick={handleSearchInput}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#1A1A1A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
