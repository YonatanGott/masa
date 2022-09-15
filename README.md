# Masa - Truck Tracking

This SPA has a node.js backend server that connects to a websocket server, parses the events sent via websockets and stores them in a MongoDB database. 
The frontend is built in React with Redux-Toolkit serving as a state-management and data fetching tool. 
The map is rendered by Pigeon-map - chosen for its lightweight and fast map rendering that is better suited for a small project.

## To install and run locally
MongoDB client should be installed locally.

### Server :
```js
cd server
npm install
npm run dev
```
### Websockets :
```js
cd websockets
npm install
npm start
```
### Client :
```js
cd client
npm install
npm run build
npm run dev
```

## To run with Docker:
```js
 docker-compose up
```
