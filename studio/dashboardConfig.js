export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e83ce9728bb4401b126d6a5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-km79eaq7',
                  apiId: 'f195ac24-654d-4d5f-bef3-de8f5ef36686'
                },
                {
                  buildHookId: '5e83ce9728bb4401dd26dbd8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-88ja9udx',
                  apiId: '4565e266-fd70-4c46-a560-4cdd46415c02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strang999/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-88ja9udx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
