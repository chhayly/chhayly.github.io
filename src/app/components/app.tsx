"use client";
import React from "react";

const App: React.FC = () => {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Chhayly 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`
        A graduate student in Computer Engineering focusing on Software Intelligence, 
        3 years of experience as a software engineer. Experienced in data-driven applications, 
        electronics, and embedded systems.`}
      </p>
      {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        
      </div> */}
    </section>
  );
};

export default App;
