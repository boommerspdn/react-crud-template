import { useState } from "react";
import { AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";
import { Loader2 } from "lucide-react";

import Post from "./components/post";
import { useCreatePost, usePosts } from "@/apis/post";

const HomePage = () => {
  const [input, setInput] = useState("");

  const { data: posts, isLoading, error } = usePosts();
  const { mutate: createPost } = useCreatePost();

  const handleCreate = () => {
    createPost({ id: uuidv4(), title: input });
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <input
        className="rounded-md border-[1px] border-border p-2"
        type="text"
        placeholder="Data to add"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="rounded-lg bg-blue-400 py-4"
        onClick={() => handleCreate()}
      >
        Add Data
      </button>
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : error instanceof AxiosError ? (
        <div>
          ERROR:{error.response?.status} {error.response?.statusText}
        </div>
      ) : (
        posts?.map((item) => (
          <Post key={item.id} id={item.id} title={item.title} />
        ))
      )}
    </div>
  );
};

export default HomePage;
