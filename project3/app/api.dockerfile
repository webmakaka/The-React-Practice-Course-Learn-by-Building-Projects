FROM node:alpine

RUN apk update && apk upgrade && \
  apk add --no-cache vim bash git curl

WORKDIR '/project'

COPY ./api/package*.json ./
RUN npm install

COPY ./api/* ./

CMD ["npm", "run", "start"]