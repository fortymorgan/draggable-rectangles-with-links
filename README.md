# Get IT test case
Test case application for Get IT Business Consulting

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
Change domain prefix for `deploy` script in `package.json`, then run:
```
npm run deploy
```
If it your first run, Surge will ask you for email and password and create an account for you.  
Then the project will be deployed for domain, which you used in `package.json` `deploy` script.  
(If domain is already used, Surge will tell about that).

## How to use

### Add block
Click twice on free space to add the block. If there is not enough space, the block wouldn't be added.

### Move block
Hold the left mouse button on the block and drag it to another place.

### Add link
Click on the point on one of the block sides, then click to the point of another block.

### Remove link
Click on the link line and it will be removed.
