import {defineField, defineType} from 'sanity'
import {v4 as uuidv4} from 'uuid'

export default defineType({
  name: 'cheep',
  title: 'Cheep',
  type: 'document',
  initialValue: () => ({
    pinned: false,
    excludeFromRss: false,
    slug: {
      _type: 'slug',
      current: uuidv4(),
    },
  }),
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Use for OG/meta. If there is not one, falls back to the title',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pinned',
      title: 'Pinned',
      description: 'Whether the post is pinned in the feed',
      type: 'boolean',
    }),
    defineField({
      name: 'excludeFromRss',
      title: 'Exclude from RSS',
      description: 'Whether Cheep should be excluded from RSS feeds',
      type: 'boolean',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'reference',
      to:{type: 'status'},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of:[{type: 'reference', to: { type: 'tag' }}],
    }),
    defineField({
      name: 'og',
      title: 'Open Graph',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'hue',
          title: 'Hue',
          type: 'number',
        }),
        defineField({
          name: 'gradient',
          title: 'Gradient',
          type: 'number',
        })
      ]
    }),
    defineField({
      name: 'cheep',
      title: 'Cheep',
      description: 'This is the "cheep"!',
      type: 'markdown',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'post',
      title: 'Related Post',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'publishedAt'
    },
    prepare(value) {
      const {title, author, date} = value
      return {
        ...value,
        subtitle: author && `by ${author.split(' ')[0]} - ${date}`
      }
    },
  },
})