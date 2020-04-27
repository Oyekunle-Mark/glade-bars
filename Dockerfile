FROM node:alpine

ENV PORT=3000

WORKDIR /home/node/glade-bars

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
