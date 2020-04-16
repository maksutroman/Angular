FROM node:latest

MAINTAINER maksutroman

COPY . /var/www
WORKDIR /var/www

RUN npm install
RUN npm install -g @angular/cli

ENTRYPOINT [ "npm", "start" ]
