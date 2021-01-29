From node

RUN npm install -g expo-cli

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 19002

CMD [ "npm", "run", "web" ]