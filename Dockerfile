FROM node:11.13.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV=production

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 4000
CMD ["node", "server.js"]