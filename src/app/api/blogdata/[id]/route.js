import { NextResponse } from "next/server";
import data from "../../../../../lib/data";

// export async function GET(request, { params }) {
//   const id = params.id;
//   const post = data.filter((item) => item.id == id);

//   return NextResponse.json({ post });
// }
export async function POST(request) {
  let { id } = await request.json();
  console.log(id);

  const post = data.filter((item) => item.id == id);

  return NextResponse.json({ post });
}
