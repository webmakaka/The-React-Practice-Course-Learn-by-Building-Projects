FROM node:alpine

RUN apk update && apk upgrade && \
  apk add --no-cache vim bash git curl

# bcrypt@2.0.1 demands python
RUN apk add --no-cache gcc python

WORKDIR '/project'

COPY ./api/package*.json ./
RUN npm install

COPY ./api/* ./

CMD ["npm", "run", "start"]