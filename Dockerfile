FROM node:18-alpine

WORKDIR /usr/src/next

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
