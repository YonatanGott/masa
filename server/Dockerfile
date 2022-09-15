FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV MONGO_URL=mongo:27017 SOCKETS_URL=host.docker.internal

EXPOSE 5000

CMD [ "npm", "run", "start" ]