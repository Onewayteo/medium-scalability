FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
RUN mkdir -p /app/log
COPY . .

CMD ["npm", "start"]