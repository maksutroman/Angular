FROM node:latest

MAINTAINER maksutroman

COPY . /var/www
WORKDIR /var/www

RUN npm install -g @angular/cli
RUN npm update @angular/cli --migrate-only --from=1.7.3
RUN npm install

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]
