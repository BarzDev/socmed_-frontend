"use client";

import { mongo_api } from "@/app/api/mongo";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function PostStatus({ handleRefresh }: any) {
  const { data: session } = useSession();
  const [statusPost, setStattusPost] = useState("");
  const handlePost = async () => {
    if (!statusPost) return;

    try {
      await mongo_api.post("/posting", {
        content: statusPost,
        author: session?.user.username,
        photo: session?.user.photo,
      });
      handleRefresh();
      setStattusPost("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="border  p-5  sticky top-0 z-20 backdrop-blur-sm bg-white/30">
      <div className="border border-2 rouded-lg p-2 bg-white ">
        <input
          className="w-full border border-2 p-2 text-sm"
          type="text"
          placeholder="Write something..."
          value={statusPost}
          onChange={(e) => setStattusPost(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className=" mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg"
            onClick={handlePost}
          >
            post
          </button>
        </div>
      </div>
    </div>
  );
}
