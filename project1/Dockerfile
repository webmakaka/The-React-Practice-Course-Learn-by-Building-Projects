FROM node:alpine as builder

RUN mkdir -p /project
WORKDIR '/project'

COPY ./app/package*.json ./
RUN npm install

COPY ./app ./

RUN npm run build

FROM nginx

RUN apt update && apt upgrade -y && \
  apt install -y bash vim less curl iputils-ping dnsutils

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /project/build /usr/share/nginx/html