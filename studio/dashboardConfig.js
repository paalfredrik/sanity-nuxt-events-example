export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-example-studio',
                  apiId: 'e744539b-70c5-46c5-bd9f-810fe40fc7d9'
                },
                {
                  buildHookId: '602391aaf878904b134463ae',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-example',
                  apiId: '5430fe3a-1b48-4a0f-b035-5eb843b0e6ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-nuxt-events-example',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-example.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
