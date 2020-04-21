FROM node AS install
WORKDIR /app
COPY ./.nvmrc package*.json /app/
RUN npm install

FROM install AS build
COPY *.js /app/
COPY src /app/src
COPY static /app/static
RUN npm run build

FROM nginx:mainline-alpine AS nginx
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/public/ /usr/share/nginx/html
RUN ln -sf /usr/share/nginx/html /usr/share/nginx/html/guides
EXPOSE 80
