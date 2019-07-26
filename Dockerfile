FROM node:10.16.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 8000
CMD npm run start:staging
