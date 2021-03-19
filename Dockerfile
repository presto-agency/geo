FROM node:14.15.5-alpine

WORKDIR /usr/app

COPY . .
RUN npm install &&\
    npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
