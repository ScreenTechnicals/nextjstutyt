"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

// const getData = async (id) => {
//   //   const postdata = await fetch(`http:localhost:3002/api/blogdata/${id}`);
//   const data = {
//     id: id,
//   };
//   const postdata = await fetch(`http:localhost:3002/api/blogdata/2`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(postdata);
//   return postdata.json();
// };

const Page = ({ params }) => {
  const { id } = params;
  const [post, setBlogs] = useState("");
  const [date, setDate] = useState("");
  const data = async () => {
    if (post?.length == 0) {
      const docRef = doc(db, "blogs", id);
      await getDoc(docRef).then((res) => {
        setBlogs(res.data());
        console.log(post);
        setDate(
          new Date(res.data()?.timestamp?.seconds * 1000)?.toLocaleDateString()
        );
      });
    }
  };
  useEffect(() => {
    data();
    console.log(post);
    console.log(date);
  });

  return (
    <div className="text-white">
      <div className="w-full rounded-xl">
        <Image
          src={post?.image}
          alt="img1"
          width={500}
          height={500}
          className="w-full object-cover h-[50vh] object-top"
          quality={100}
          priority={true}
        />
      </div>
      <div className="px-60 py-10">
        <h1 className="text-4xl">{post?.title}</h1>
        <p>{date}</p>
        <p>{post?.desc}</p>
      </div>
    </div>
  );
};

export default Page;
