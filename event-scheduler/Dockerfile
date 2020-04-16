FROM node:latest

MAINTAINER maksutroman

COPY . /var/www
WORKDIR /var/www

RUN npm install

ENTRYPOINT [ "npm", "start" ]
~