# FROM node:alpine
FROM node:12.13.1-alpine3.10

RUN apk update && apk upgrade && \
  apk add --no-cache vim bash git curl

# bcrypt@2.0.1 demands python
RUN apk add --no-cache make gcc g++ python

RUN npm install node-gyp -g

WORKDIR '/project'

COPY ./api/package*.json ./
RUN npm install

COPY ./api/* ./

CMD ["npm", "run", "start"]