import React from "react";
import articles from "./articles_content";

function Articles() {
  return (
    <section className="px-8 w-full flex flex-col items-center mt-[10vh] ">
      <h2 className="my-8 text-3xl italic font-medium md:hidden">Our Articles</h2>
      <div className="hidden md:flex w-full h-[35vh] border-black border-2 my-[2.5vh] justify-center items-center">
        <h2 className="text-7xl italic">Our Articles</h2>
      </div>
      <div className="w-full flex flex-col gap-8 md:flex md:flex-row">
        {Object.keys(articles).map((article, i) => {
          const content = articles[article];
          return (
            <a
              href={"/" + article}
              key={i}
              className="w-full flex flex-col gap-4 saturate-50 md:saturate-[25%] md:hover:saturate-[75%] transition-all"
            >
              <figure className="w-full p-2 border-2 border-black">
                <div
                  className="w-full h-48 bg-black/10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${content.img})` }}
                ></div>
              </figure>
              <p className="text-xl underline">{content.title}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Articles;
