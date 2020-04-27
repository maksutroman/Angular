FROM node:latest

MAINTAINER maksutroman

COPY . /var/www
WORKDIR /var/www

RUN npm install -g @angular/cli
RUN npm install

ENTRYPOINT [ "ng", "serve"]
