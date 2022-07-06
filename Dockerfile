FROM node:lts-alpine

WORKDIR /home/node/api

COPY package.json .

RUN npm install ts-node-dev
RUN npm install --location=global npm@latest

COPY . . 

EXPOSE 3333

CMD [ "npm", "run", "dev" ]

