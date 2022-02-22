FROM node:14.16.0
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
