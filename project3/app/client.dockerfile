FROM node:lts-alpine as builder

RUN mkdir -p /project
WORKDIR '/project'

COPY ./client/package*.json ./
RUN npm install

COPY ./client ./

RUN npm run build

FROM nginx

RUN apt update && apt upgrade -y && \
  apt install -y bash vim less curl iputils-ping dnsutils

# RUN apt update && apt upgrade -y
# RUN apt install -y bash vim less curl 
# RUN apt install -y iputils-ping
# RUN apt install -y dnsutils

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /project/build /usr/share/nginx/html