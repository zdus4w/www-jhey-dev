export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Configuration')
        .child(
          S.editor()
            .schemaType('siteConfig')
            .documentId('siteConfig')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['siteConfig'].includes(listItem.getId()))
    ])