#stage 1
FROM node:latest as node
WORKDIR /front-service
COPY ./PocheCard_Front .
RUN npm install --force
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /front-service/dist/ /usr/share/nginx/html