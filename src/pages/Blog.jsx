import { useState } from "react";
import { Header, Navigation } from "../components";

export function Blog() {
  const blogList = [
    {
      date: "02 FEB 2025",
      category: "PERSONAL",
      title: "How I become a coder?",
      content: `We're designing the next era of technical grantmaking at Mozilla
              Foundation. And because we believe in working open, we’re sharing
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
      <div className="max-w-[1140px] flex flex-col mx-auto">
        {blogList.map((article, index) => (
          <a href={article.link} key={index} className="group cursor-pointer ">
            <div className="flex mb-6 p-6">
              <div className="w-1/3">
                <div className="flex items-center space-x-4">
                  <span className="h-[2px] w-12 bg-indigo-500" />
                  <span className="tracking-wide font-semibold text-sm text-indigo-600">
                    {article.date}
                  </span>
                </div>
              </div>
              <div className="w-2/3">
                <span className="text-sm text-neutral-400">
                  {article.category}
                </span>
                <h2 className="font-zilla text-[40px] group-hover:text-blue-800 group-hover:underline">
                  {article.title}
                </h2>
                <p className="text-zinc-700">{article.content}</p>
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
      <main>
        <div className="max-w-[1140px] border-b mx-auto mb-12"></div>
        <BlogList blogList={blogList} />
        <div className="h-12"></div>
      </main>
    </>
  );
}
