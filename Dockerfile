FROM node:18-alpine

WORKDIR /usr/src/next

COPY *.* /usr/src/next

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
