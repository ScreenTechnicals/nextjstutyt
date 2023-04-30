"use client";

import React from "react";
import Card from "../../../components/Card";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../lib/firebase";

// const getData = async () => {
//   const postdata = await fetch(`http:localhost:3002/api/blogdata`);
//   return postdata.json();
// };

const Page = () => {
  const blogsRef = collection(db, "blogs");
  const q = query(blogsRef, orderBy("timestamp"));
  const [blogSnapShots, loading1] = useCollection(q);
  return (
    <div className="text-white w-full">
      <div className="px-60 flex justify-center items-center">
        {blogSnapShots?.docs
          ? blogSnapShots?.docs?.map((post) => {
              return <Card post={post} />;
            })
          : "NO Post"}
      </div>
    </div>
  );
};

export default Page;
