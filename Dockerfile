FROM node:14.15.5

WORKDIR /usr/app

COPY . .

RUN npm install &&\
    npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
