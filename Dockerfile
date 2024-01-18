FROM node:19.9.0-alpine

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build:ind4

EXPOSE 3000

CMD ["npm", "run", "dev:ind4"]
