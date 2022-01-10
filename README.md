# Webpack Guide and Template

## Step by Step Guide
1. Open the command line on your project and write: "npt init -y"
2. Then you want to add your dependencies with: "npm install --save-dev webpack webpack-cli jest style-loader css-loader webpack-merge webpack-dev-server html-webpack-plugin"
3. Create a dist folder, a src and a test folder
4. On the project folder add webpack.common.js, webpack.dev.js and webpack.prod.js and paste the preset I provided
5. Add the three scripts I left in my package.json to change from dev (npm start) to production (npm run build) with the command line as well as a test command that innitiates jest
6. Create a template.html on /src and add anything you need to hard-code on your project, that'll be rendered to dist/index.html when you're done
7. Start writting your code on JS and CSS (don't forget to import/export whatever you need, in this repository I left an example on how to do it)
8. Everything should be routed to index.js
9. Install the @babel/preset-env with npm i -D @babel/preset-env and copy my .babelrc file in the project's root. This'll make us able to use ES6 modules
10. To deploy to github pages:
    a. add a .gitignore file and add "node_modules" so you don't commit that as it's not necessary
    b. remove the dist directory from it if you somehow added it
    c. make sure git knows about this subtree with this line on the command line: git add dist && git commit -m "Initial dist subtree commit"
    d. Use subtree push to send it to the gh-pages branch on GitHub with: git subtree push --prefix dist origin gh-pages

## Things you should know about each file
- src is where your code goes, then after processing with webpack it "renders" to the dist folder. 
- package.json contains both scripts you'll use. Use npm run build to start production mode and npm start to start developer mode
- There are three files that contain the information regarding how webpack will behave
1. webpack.common.js has everything that is shared in both modes, it takes index.js as an entry point so you'll have to route everything there, but you could add more if you want. Line 26 (clean: true) makes it so that the content on the dist folder are deleted before adding the new ones to avoid duplicates
2. webpack.dev.js and webpack.prod.js use webpack-merge to link it's content with the previously mentioned
