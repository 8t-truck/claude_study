FROM node:22

WORKDIR /app/server

COPY . .

RUN npm install

CMD ["node", "index.js"]