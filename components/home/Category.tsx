import {
  Briefcase,
  CircleDollarSign,
  FolderOpen,
  Landmark,
  Laptop2,
  Megaphone,
  MessageSquare,
  Search,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

function Category() {
  interface CategoryData {
    Svg: LucideIcon;
    title: string;
  }
  [];
  const CATEGORY: CategoryData[] = [
    {
      Svg: Landmark,
      title: "Accounting",
    },
    {
      Svg: Briefcase,
      title: "Business & consulting",
    },
    {
      Svg: Search,
      title: "Human Research",
    },
    {
      Svg: Megaphone,
      title: "Marketing and finance",
    },
    {
      Svg: Laptop2,
      title: "Design & development",
    },
    {
      Svg: CircleDollarSign,
      title: "Finance management",
    },
    {
      Svg: FolderOpen,
      title: "Project management",
    },
    {
      Svg: MessageSquare,
      title: "Customer services",
    },
  ];
  useEffect(() => {
    const cursor = document.querySelector(".follow-img") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="py-[50px] md:py-[80px]" id="">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-8 ">
          {CATEGORY.map(({ Svg, title }, idx) => (
            <div key={idx} className="flex items-center gap-2">
                <div>
                  <Svg strokeWidth={1.5} size={32} />
                </div>
              <div className="cont flex">
                <span className="text-lg md:text-2xl lg:text-4xl font-bold">
                  {title}
                </span>
                <Image
                unoptimized
                  className="follow-img"
                  src={
                    "https://github.com/coreDeiv/reveal-and-follow-image-on-text-hover/blob/master/cover-img.jpg?raw=true"
                  }
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
