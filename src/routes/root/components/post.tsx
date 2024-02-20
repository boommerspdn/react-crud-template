import { useDeletePost, useUpdatePost } from "@/apis/post";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";

type PostProps = {
  id: string;
  title: string;
};

const Post = ({ id, title }: PostProps) => {
  const [input, setInput] = useState("");

  const { mutate: editPost } = useUpdatePost(id);
  const { mutate: deletePost } = useDeletePost(id);

  // console.log(data);

  const handleEdit = () => {
    editPost({ id, title: input });
  };

  const handleDelete = () => {
    deletePost();
  };

  return (
    <div className="flex gap-2">
      <h1>{title}</h1>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="edit the info here"
          className="border-[1px] border-border"
        />
        <button onClick={() => handleEdit()}>
          <Edit />
        </button>
        <button onClick={() => handleDelete()}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default Post;
