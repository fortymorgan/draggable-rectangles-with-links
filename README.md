# Get IT test case
A test case for Get IT business consulting

## Screenshots
<img src="https://github.com/fortymorgan/getITtest/blob/master/screenshots/Blocks.png" alt="Result" title="Result" />

## How to develop
First you need to create `bundle.js` with:
```
npm run watch
```
Then, to run the app locally, open `dist/index.html`.

## How to deploy
First you need to install [Surge](http://surge.sh)
```
npm install -g surge
```
Change the domain prefix for the `deploy` script in `package.json`, then run:
```
npm run deploy
```
If it's your first run, Surge will ask you for email and password and create an account for you.  
Then the project will be deployed for the domain, which you used in the `package.json` `deploy` script.  
(If the domain is already used, Surge will tell you about that).

## How to use

### Add block
Click twice on free space to add the block. If there is not enough space, the block won't be added.

### Move block
Hold the left mouse button on the block and drag it to another place.

### Add link
Click on the point at one of the block sides, then click to the point of another block.

### Remove link
Click on the link line and it will be removed.
