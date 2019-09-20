## Installation

To use this boilerplate, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Setup

- Clone this repository
- Navigate to the project folder and run `yarn`
- Run `npm link`
- Run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

### Generator

- To add a new module run `ssm create-module moduleName` or `ssm create moduleName`. This command will create the files in the following folders:
   `/src/assets/scripts/layout-builder/modules/moduleName.js`
   `/src/assets/styles/layout-builder/modules/_moduleName.scss`
   `/src/partials/layout-builder/modules/moduleName.html`

- `ssm create-module moduleName -j` will create all module's files except js file
- `ssm create-module moduleName -c` will create all module's files except scss file
- `ssm create-module moduleName -h` will create all module's files except html file
- Flags can be combined, for example `ssm create-module moduleName -j -h` will create only scss file

- To delete module's files run `ssm remove-module moduleName` or `ssm remove moduleName`. 

- To add a new template run `ssm create-template templateName`. This command will create the files in the following folders:

   `/src/assets/scripts/layout-builder/templates/templateName.js`
   `/src/assets/styles/layout-builder/templates/_templateName.scss`
   `/src/partials/layout-builder/templates/templateName.html`

- To delete template's files run `ssm remove-template templateName`. 

### Styleguid

Styleguid is available at this url ```/styleguide```

### Additional Features

- This package comes with several code snippets, executable using VS Code. Look inside `.vscode/snippets/html.json` to see what's available. In order to use them, first install the [Project Snippets Extension](https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets#overview)


