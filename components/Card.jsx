"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
  return (
    <Link href={`/blogs/${post?.id}`}>
      <div className="w-[300px] bg-gradient-to-br from-[#000] to-[#272727] rounded-md shadow-md shadow-[#222222] p-5 m-3">
        <Image
          src={"/images/img1.jpg"}
          alt="img1"
          width={300}
          height={300}
          className="rounded-md"
        />
        <div>
          <p className="font-bold text-2xl pt-3">
            {post && post?.data()?.title}
          </p>
          <p className="text-xs">{post && post?.data()?.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
