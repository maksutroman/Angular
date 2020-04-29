FROM node:latest

MAINTAINER maksutroman

COPY event-scheduler/. /var/www
WORKDIR /var/www

RUN npm install -g @angular/cli
RUN npm install

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]
