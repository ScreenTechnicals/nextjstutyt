import Image from "next/image";
import Card from "../../components/Card";

export default function Home() {
  return (
    <div>
      <div className="w-full rounded-xl">
        <Image
          src={"/images/img1.jpg"}
          alt="img1"
          width={500}
          height={500}
          className="w-full object-cover h-[50vh] object-top"
          quality={100}
          priority={true}
        />
      </div>
      <div className="px-60 flex justify-center items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
