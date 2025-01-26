"use client";

import Header from "@/components/header/Header";
import Article from "@/components/main/Article";
import articles from "@/components/main/articles_content";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <Article article={articles[id]} />
    </div>
  );
}

export default page;
