FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .
EXPOSE 3000
ENTRYPOINT [ "node", "index.js" ]