"use client";

import Information from "@/components/main/Information";

function Article({ article }) {
  return (
    <section className="w-full flex flex-col items-center mt-[10vh] pb-10 md:pb-6">
      <div className="w-full h-48 bg-black relative lg:h-[40vh]">
        <div
          className="w-full h-full bg-black/10 bg-contain bg-center bg-fixed saturate-0 lg:saturate-50 md:bg-cover"
          style={{
            backgroundImage: `url(${article.banner})`,
          }}
        ></div>
      </div>

      <div className="w-full px-8 md:px-0 mt-8">
        <div className="w-full md:h-[25vh] md:flex md:items-center md:justify-between md:px-16">
          <h2 className="italic text-3xl text-center md:text-6xl md:w-[35vw] md:text-left">
            {article.title}
          </h2>
          <div className="hidden md:flex h-[25vh] w-[25vh] border-2 border-black rounded-full p-8 justify-center items-center">
            <img src="arrow_icon.png" alt="Scroll down" className="h-3/4"/>
          </div>
        </div>
        <Information unit={article.unit} />

        {article.type == "text" && (
          <div className="w-full md:flex md:justify-between md:px-16 mt-12 md:mt-24">
            <h3 className="text-5xl italic hidden md:flex">{article.subtitle}:</h3>
            <div className="text-lg text-justify md:text-2xl md:w-2/3">
              {article.content.split("\n").map((line, index) => (
                <p key={index} className="mb-6">{line}</p>
              ))}
            </div>
          </div>
        )}

        <div className="md:w-full md:flex md:justify-end md:px-16 md:mt-8">
          <a
            href={article.next}
            className="w-full block text-center md:w-auto md:px-16 md:py-3 md:mt-4 md:flex text-primary py-4 font-medium text-xl mt-2 bg-secondary"
          >
            Next article
          </a>
        </div>
      </div>
    </section>
  );
}

export default Article;
