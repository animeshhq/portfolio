import React from 'react'
import getPostMetadata from '@/utils/getPostMetadata'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

// This function generates static paths for each post based on its slug
export async function generateStaticParams() {
  const postMetaData = getPostMetadata('posts')
  
  return postMetaData.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = ({ params }) => {
  const { slug } = params

  // Fetch the post content based on the slug
  const fileContents = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { content, data } = matter(fileContents)

  return (
    <div className="post-content text-[var(--text-secondary)] max-w-[576px] flex flex-col justify-center items-center min-h-screen mx-auto mt-28 px-4">
      <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 mt-7">{data.title}</h1>
      <p className="text-gray-700 mb-2">{data.date}</p>
      <Markdown
        className="mt-10 text-sm md:text-lg lg:text-xl"
        options={{
          overrides: {
            h1: { component: 'h1', props: { className: 'text-2xl font-bold mb-4' } },
            p: { component: 'p', props: { className: 'text-base md:text-lg leading-7 mb-4' } },
            ul: { component: 'ul', props: { className: 'list-disc pl-6 mb-4' } },
            li: { component: 'li', props: { className: 'mb-2' } },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}

export default PostPage
