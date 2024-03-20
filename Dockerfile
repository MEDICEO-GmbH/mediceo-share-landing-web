FROM node:19.4.0-alpine

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install
# add app
COPY . ./
RUN npm run build

# start app
CMD ["npm", "run", "start"]