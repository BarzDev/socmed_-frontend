"use client";

import { mongo_api } from "@/app/api/mongo";
import { timeAgo } from "@/utils/setTime";
import { Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function CommentStatus({ comments, postId, handleRefresh }: any) {
  const { data: session } = useSession();
  const [commentText, setCommentText] = useState("");
  const handlePost = async () => {
    if (!commentText) return;

    try {
      await mongo_api.post(`/posting/comment/${postId}`, {
        content: commentText,
        author: session?.user.username,
        photo: session?.user.photo,
      });
      handleRefresh();
      setCommentText("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div>
      <div className="border border-2 rouded-lg p-2">
        <input
          className="w-full border border-2 p-2 text-sm"
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className=" mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg"
            onClick={handlePost}
          >
            comment
          </button>
        </div>
      </div>

      {comments
        .slice()
        .reverse()
        .map((comment: any) => (
          <Comment key={comment._id} comment={comment} />
        ))}
    </div>
  );
}

function Comment({ comment }: any) {
  return (
    <div className="border px-5 py-2 border ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar size="sm" name="Kent Dodds" src={comment.photo} />
          <p className="ml-2 font-bold">{comment.author}</p>
        </div>
        <p>{timeAgo(comment.created_at)}</p>
      </div>

      <div className="px-2">
        <p>{comment.content}</p>
      </div>
    </div>
  );
}
