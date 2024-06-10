"use client";

import { Avatar } from "@chakra-ui/react";
import { Comment } from "./comment";
import { LikeButton } from "./likeButton";
import { ShareButton } from "./shareButton";
import { CommentStatus } from "./comment-status";
import { useState } from "react";
import { timeAgo } from "@/utils/setTime";

export function CardPost({ post, handleRefresh }: any) {
  const [view, setView] = useState(false);

  const viewComment = () => {
    setView(!view);
  };

  return (
    <div className="border border-cyan-500 border-2 flex flex-col gap-2 p-4 rounded-lg bg-white w-full ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar name="Kent Dodds" src={post.photo} />
          <p className="ml-2 font-bold">{post.author}</p>
        </div>
        <p>{timeAgo(post.created_at)}</p>
      </div>
      <div>
        <p>{post.content}</p>
      </div>
      <div className="w-full flex justify-end">
        <div className="flex w-40 justify-end ">
          {/* <ShareButton /> */}
          <Comment viewComment={viewComment} comments={post.comments.length} />
          <LikeButton post={post} handleRefresh={handleRefresh} />
        </div>
      </div>
      {view && (
        <CommentStatus
          comments={post.comments}
          postId={post._id}
          handleRefresh={handleRefresh}
        />
      )}
    </div>
  );
}
