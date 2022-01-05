export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61d4ff121f0fd0818c044a79',
                  title: 'Sanity Studio',
                  name: 'cpb-11-ty-studio',
                  apiId: '4b2cc7ce-07f0-4502-931c-d67e6053c3b4'
                },
                {
                  buildHookId: '61d4ff12256a2f73c9bf49fb',
                  title: 'Blog Website',
                  name: 'cpb-11-ty',
                  apiId: 'e7adb01c-00b9-415a-8121-9b2df434a06d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahg/cpb-11ty',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cpb-11-ty.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
