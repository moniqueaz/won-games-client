module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: 'path name please',
        choices: ['components', 'templates', 'styles', 'route/pages']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Input name please'
      }
    ],
    actions: function (data) {
      if (data.path === 'route/pages') {
        return [
          {
            type: 'add',
            path: '../src/pages/{{dashCase name}}.tsx',
            templateFile: 'templates/pages.tsx.hbs'
          }
        ]
      }

      if (data.path === 'styles') {
        return [
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/index.ts',
            templateFile: 'templates/styles.ts.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/test.tsx',
            templateFile: 'templates/testStyles.ts.tsx.hbs'
          }
        ]
      }

      if (data.path === 'templates') {
        return [
          {
            type: 'add',
            path: '../src/{{path}}/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/index.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/{{path}}/{{pascalCase name}}/styles.ts',
            templateFile: 'templates/styles.ts.hbs'
          },
          {
            type: 'add',
            path: '../src/{{path}}/{{pascalCase name}}/test.tsx',
            templateFile: 'templates/test.tsx.hbs'
          }
        ]
      }
      return [
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/stories.tsx',
          templateFile: 'templates/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/test.tsx.hbs'
        }
      ]
    }
  })
}
