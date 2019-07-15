### STAGE 1: Build ###
FROM node:8.11.1-alpine as builder
# Preparing working environment.
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
