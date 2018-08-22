# Get IT test case
A test case for Get IT business consulting

[На русском](README.md)

## Link to the app
https://get-it-test.surge.sh

## Case Description
Develop an app which creates rectangles of different colors on the double-click on the screen.  
Rectangles are added to the place where the double-click was done.  
Rectangles can be dragged around the screen.  
Between rectangles an unlimited number of links can be created / deleted.  
When dragging the linked rectangles, the links continue to persist.

## Screenshots
<img src="screenshots/Blocks.png" alt="Rects and links" title="Rects and links" />

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

## Testing

Tests are made with [Jest](https://github.com/facebook/jest)

Run tests with:
```
npm test
```
State snapshots for tests in `__tests__/__assets__`.

## How to use

### Add block
Click twice on free space to add the block. If there is not enough space, the block won't be added.

### Move block
Hold the left mouse button on the block and drag it to another place.

### Add link
Click on the point at one of the block sides, then click to the point of another block.

### Remove link
Click on the link line and it will be removed.

## Built with
- [React](https://github.com/facebook/react) - web framework
- [Redux](https://github.com/reduxjs/redux) - app state container
