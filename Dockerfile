FROM node:20

WORKDIR /rest

COPY . .

RUN npm i
RUN npm run build

CMD ["node", "dist/main.js"]
