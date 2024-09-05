"use client";

const MainBody = ({ children }) => {
  return (
    <section className="w-full max-w-[1058px] min-h-screen flex flex-col items-start justify-start mx-auto px-4 sm:px-8 text-white text-3xl sm:text-5xl">
      {children}
    </section>
  );
};

export default MainBody;
