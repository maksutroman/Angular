FROM node:latest

MAINTAINER maksutroman

COPY . /var/www
WORKDIR /var/www

RUN npm install -g @angular/cli
RUN npm install

ENTRYPOINT [ "npm", "start", "--host", "0.0.0.0" ]
