import { useState } from "react";
import { Header, Navigation } from "../components";

export function Blog() {
  const blogList = [
    {
      date: "02 FEB 2025",
      category: "PERSONAL",
      title: "How I become a coder?",
      content: `We're designing the next era of technical grantmaking at Mozilla
       Foundation. And because we believe in working open, we're sharing
       our thinking now, even as it is evolving.`,
      link: "#",
    },
    {
      date: "05 FEB 2025",
      category: "TECH",
      title: "The Future of Web Development",
      content: `The world of web development is constantly evolving. With new frameworks and technologies emerging every day, it's crucial to stay ahead of the curve. Here's what the future looks like for developers.`,
      link: "#",
    },
    {
      date: "10 FEB 2025",
      category: "PERSONAL",
      title: "My Journey with JavaScript",
      content: `JavaScript is one of the most powerful and versatile languages in the world. Here's how I started learning JavaScript and how it has shaped my career as a developer.`,
      link: "#",
    },
  ];

  function BlogList({ blogList }) {
    return (
      <div className="max-w-[1140px] flex flex-col mx-auto px-4 md:px-6">
        {blogList.map((article, index) => (
          <a href={article.link} key={index} className="group cursor-pointer">
            <div className="flex flex-col md:flex-row mb-10 p-4 md:p-6 border-b border-gray-100">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <span className="h-[2px] w-8 md:w-12 bg-indigo-500" />
                  <span className="tracking-wide font-semibold text-xs md:text-sm text-indigo-600">
                    {article.date}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span className="text-xs md:text-sm text-neutral-400">
                  {article.category}
                </span>
                <h2 className="font-zilla text-2xl md:text-3xl lg:text-[40px] font-medium group-hover:text-blue-800 group-hover:underline transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-sm md:text-base text-zinc-700 mt-2 line-clamp-3 md:line-clamp-none">
                  {article.content}
                </p>
                <div className="mt-3 text-indigo-600 font-medium text-sm md:text-base flex items-center group-hover:underline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      <Header
        title="Blog"
        description="I share insights, tutorials, and tips on web development, coding, and the tech industry. Join me as I explore development concepts, my journey in tech, and helpful resources for fellow developers."
        backgroundColor="bg-indigo-400"
      />
      <main className="py-8 md:py-12">
        <div className="max-w-[1140px] border-b mx-auto mb-8 md:mb-12 px-4 md:px-6"></div>
        <BlogList blogList={blogList} />
        <div className="h-8 md:h-12"></div>
      </main>
    </>
  );
}
