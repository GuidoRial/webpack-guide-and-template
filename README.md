# Webpack Guide and Template

## Step by Step Guide
1. Open the command line on your project and write: "npt init -y"
2. Then you want to add your dependencies with: "npm install --save-dev webpack webpack-cli style-loader css-loader webpack-merge webpack-dev-server html-webpack-plugin"
3. Create a dist folder and a src folder
4. On the src folder add webpack.common.js, webpack.dev.js and webpack.prod.js and paste the preset I provided
5. Add the two scripts I left in my package.json to change from dev (npm start) to production (npm run build) with the command line
6. Create a template.html and add anything you need to hard-code on your project, that'll be rendered to dist/index.html when you're done
7. Start writting your code on JS and CSS (don't forget to import/export whatever you need, in this repository I left an example on how to do it)
8. Everything should be routed to index.js