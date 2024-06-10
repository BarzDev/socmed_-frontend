"use client";
import { mongo_api } from "@/app/api/mongo";
import { CardPost } from "@/components/ui/card_post";
import { PostStatus } from "@/components/ui/post_status";
import { SkeltonCard } from "@/components/ui/skelton";
import { useEffect, useState } from "react";

interface Posting {
  _id: string;
}

export default function Dashboard() {
  const [postings, setPostings] = useState<Posting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const fetchData = async () => {
    try {
      const response = await mongo_api.get("/posting");
      setPostings(response.data.postings.reverse());
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching postings:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="h-screen overflow-y-auto px-5 bg-slate-100">
      <PostStatus handleRefresh={handleRefresh} />
      <div className="flex flex-col gap-4 py-5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <SkeltonCard key={index} />
          ))
        ) : postings.length > 0 ? (
          postings.map((post) => {
            return (
              <CardPost
                key={post._id}
                post={post}
                handleRefresh={handleRefresh}
              />
            );
          })
        ) : (
          <p>No postings available</p>
        )}
      </div>
    </div>
  );
}
