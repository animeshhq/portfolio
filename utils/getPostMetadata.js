import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basepath) {
    const folder = basepath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basepath}/${filename}`, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            slug: filename.replace('.md', '')
        }
    })

    return posts
}