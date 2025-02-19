import Gumroad from '@/components/Gumroad';
import getPostMetadata from '@/utils/getPostMetadata';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const postMetaData = getPostMetadata('posts');

  return (
    <>
      <div className="text-[var(--text-secondary)] max-w-[612px] min-h-screen flex flex-col items-center mx-auto mt-20 sm:mt-24 md:mt-28 px-4 sm:px-6 lg:px-8">
        {/* <Gumroad/> */}
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-4xl font-outfit font-semibold">Focus On What Matters</p>
          <p className="text-end font-instrument font-light text-sm mt-2">take the edge</p>
        </div>

        {postMetaData.map((post, postIndex) => (
          <section key={postIndex} className="w-full mb-12">
            <div className="p-6">
              <Link href={`/letters/${post.slug}`} className="text-lg sm:text-xl mb-2 text-start">{post.title}</Link>
              <p className="text-gray-700 text-sm mb-4 text-start">{post.date}</p>
              <Link href={`/letters/${post.slug}`} className="text-[var(--text-secondary)] hover:text-[#cccbcd] border-b text-start block">
                Read more
              </Link>
            </div>
          </section>
        ))}
        </div>
    </>
  );
};

export default Page;
