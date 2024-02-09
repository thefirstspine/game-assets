FROM node:20

WORKDIR /rest

COPY . .

RUN npm ci
RUN npm run build

CMD ["node", "dist/main.js"]
