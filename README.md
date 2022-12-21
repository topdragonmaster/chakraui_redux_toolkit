# React App(Typescript)

All the UI components and containers are written by [chakra ui](https://chakra-ui.com/) and includes generic [eslint](https://eslint.org/) and [prettier](https://prettier.io/) configurations.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
  > yarn install


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project structure

```
figment-explorer
├── components
│   ├── Drawer         # Drawer Components
│   ├── Header         # Header Component
│   ├── LabelText      # LabelText component
│   ├── ...            # etc...
│   └── index.ts       # export all components in `components` folder level
│
├── constants          # Define constant variables
├── pages              # This will contain all web pages
├── store              # Define redux store here
└── types              # Define types and interfaces
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
