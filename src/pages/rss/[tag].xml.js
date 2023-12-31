import { genRssMarkup } from './_htmlGenerator.js'
import { getRssData } from '../../constants/queries.js'

const { cheeps, config: siteConfig, tags: allTags } = await getRssData()

export function getStaticPaths() {
  const tagPaths = allTags.map((tag) => {
    return { params: { tag: tag.title.toLowerCase() } }
  })
  return tagPaths
}

export const get = ({ params, request }) => {
  const metadata = {
    url: siteConfig?.rss?.url || 'https://jhey.dev/',
    title: siteConfig?.rss?.title || 'https://jhey.dev/',
    subtitle: siteConfig?.rss?.subtitle || 'Posts from Jhey',
    description: `The RSS feed for ${params.tag} posts from Jhey Tompkins`,
    author: siteConfig.character,
    email: 'rss@jhey.dev',
    tag: params.tag,
  }
  const posts = cheeps.filter(cheep => {
    return params.tag && cheep.tags && cheep.tags.length > 0 && cheep.tags.find(tag => {
      return tag !== null && tag.title.toLowerCase() === params.tag.toLowerCase()
    })
  }).map((cheep) => ({
    ...cheep,
    url: `${metadata.url}cheep/${cheep.slug.current}`,
  })).sort((a, b) => {
    const dateA = new Date(a.publishedAt)
    const dateB = new Date(b.publishedAt)
    return dateB - dateA
  })

  return new Promise((resolve, reject) => {
    resolve({
      body: genRssMarkup(
        posts,
        metadata
      ),
    })
  })
}