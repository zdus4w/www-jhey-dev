import {defineField, defineType} from 'sanity'
import {v4 as uuidv4} from 'uuid'

export default defineType({
  name: 'siteConfig',
  title: 'Site Config',
  description: 'General site configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'character',
      title: 'Main Character',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      description: "Use a 3:1 aspect ratio for banner demos and remember to reduce motion",
      type: 'object',
      fields: [
        defineField({
          name: 'bannerDemo',
          title: 'Banner embedded demo',
          description: 'Point at a demo to embed',
          type: 'string',
        }),
        defineField({
          name: 'bannerAlt',
          title: 'Image alt',
          type: 'string',
        }),
      ]
    }),
    defineField({
      name: 'rss',
      title: 'RSS',
      description: 'RSS related config',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'Base URL',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'string',
        }),
      ]
    }),
    defineField({
      name: 'about',
      title: 'About',
      description: 'Content for your about page',
      type: 'markdown',
    }),
    defineField({
      name: 'writing',
      title: 'Writing',
      description: 'Writing intro',
      type: 'markdown',
    }),
    defineField({
      name: 'cheeps',
      title: 'Cheeps',
      description: 'Cheeps related site content',
      type: 'object',
      fields: [
        defineField({
          name: 'footer',
          title: 'Cheep footer',
          description: 'Sign off for long-form cheeps',
          type: 'markdown',
        })
      ]
    })
  ],

  preview: {
    prepare(selection) {
      return {
        title: 'Site Configuration',
        media: undefined,
      }
    },
  },
})
