"use client";

import { mongo_api } from "@/app/api/mongo";

import { CardPost } from "@/components/ui/card_post";
import { SkeltonCard } from "@/components/ui/skelton";
import { useEffect, useState } from "react";

export default function Trending() {
  const [postings, setPostings] = useState([]);
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

  function calculateTrendScore(posting: any) {
    const now = new Date().getTime();
    const postDate = new Date(posting.created_at).getTime();
    const ageInHours = (now - postDate) / (1000 * 60 * 60);

    const likeWeight = 2;
    const commentWeight = 1.5;
    const ageWeight = 1;

    const score =
      posting.likes.length * likeWeight +
      posting.comments.length * commentWeight;
    // ageInHours * ageWeight;

    return score;
  }

  const sortedPostings = postings.sort(
    (a, b) => calculateTrendScore(b) - calculateTrendScore(a)
  );

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="h-screen overflow-y-auto px-5 md:pb-0 pb-24 bg-slate-100">
      <p className="pt-5 font-bold">#TRENDING</p>

      <div className="flex flex-col gap-4 py-5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <SkeltonCard key={index} />
          ))
        ) : postings.length > 0 ? (
          postings.map((post: any, index: number) => {
            return (
              <div key={post._id} className="flex gap-2 items-center">
                <span className="font-bold">{`#${index + 1}`}</span>
                <CardPost post={post} handleRefresh={handleRefresh} />
              </div>
            );
          })
        ) : (
          <p>No postings available</p>
        )}
      </div>
    </div>
  );
}
