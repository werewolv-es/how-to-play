FROM node AS install
WORKDIR /app/
COPY ./.nvmrc package*.json /app/
RUN npm ci

FROM install AS build
COPY . /app/
RUN npm run build

FROM nginx:mainline-alpine AS nginx
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build/ /usr/share/nginx/html
RUN ln -sf /usr/share/nginx/html /usr/share/nginx/html/guides
EXPOSE 80
