## Installation

To use this boilerplate, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Setup

- Clone this repository
- Navigate to the project folder and run `npm install`
- Run `npm link`
- Run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

### Generator

- To add a new component run `ssm create-component componentName` or `ssm create componentName`. This command will create the files in the following folders:
   `/src/assets/scripts/layout-builder/components/componentName.js`
   `/src/assets/styles/layout-builder/components/_componentName.scss`
   `/src/partials/layout-builder/components/componentName.html`

- `ssm create-component componentName -j` will create all component's files except js file
- `ssm create-component componentName -c` will create all component's files except scss file
- `ssm create-component componentName -h` will create all component's files except html file
- Flags can be combined, for example `ssm create-component componentName -j -h` will create only scss file

- To delete component's files run `ssm remove-component componentName` or `ssm remove componentName`. 

- To add a new template run `ssm create-template templateName`. This command will create the files in the following folders:

   `/src/assets/scripts/layout-builder/templates/templateName.js`
   `/src/assets/styles/layout-builder/templates/_templateName.scss`
   `/src/partials/layout-builder/templates/templateName.html`

- To delete template's files run `ssm remove-template templateName`. 

### Styleguid

Styleguid is available at this url ```/styleguide```

### Additional Features

- This package comes with several code snippets, executable using VS Code. Look inside `.vscode/snippets/html.json` to see what's available. In order to use them, first install the [Project Snippets Extension](https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets#overview)


