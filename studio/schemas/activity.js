import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Blog', value: 'blog'},
          {title: 'Newsletter', value: 'newsletter'},
          {title: 'Video', value: 'video'},
          {title: 'Conference', value: 'conference'},
          {title: 'Demo', value: 'demo'},
          {title: 'Work', value: 'work'},
          {title: 'Life', value: 'life'},
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'when',
      title: 'When',
      type: 'date',
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
      options: {
        list: [
          {title: 'CSS Tricks', value: 'CSS Tricks'},
          {title: 'Smashing Magazine', value: 'Smashing Magazin'},
          {title: 'SitePoint', value: 'SitePoint'},
          {title: 'developer.chrome.com', value: 'developer.chrome.com'},
          {title: 'web.dev', value: 'web.dev'},
          {title: 'CodePen', value: 'CodePen'},
          {title: 'Codrops', value: 'Codrops'},
        ]
      }
    }),
  ],
})
