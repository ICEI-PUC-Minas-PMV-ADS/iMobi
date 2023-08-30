FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm run build:docker

EXPOSE 3000

CMD [ "npm", "run", "start:docker" ]
