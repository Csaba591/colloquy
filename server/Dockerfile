FROM node:current-alpine3.10

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]