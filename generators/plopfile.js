module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: 'path name please',
        choices: ['components', 'templates', 'pages']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Input name please'
      }
    ],
    actions: function (data) {
      const actions = []

      if (data.path === 'pages') {
        actions.push({
          type: 'add',
          path: '../src/{{path}}/{{camelCase name}}.tsx',
          templateFile: 'templates/pages.tsx.hbs'
        })

        return actions
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
