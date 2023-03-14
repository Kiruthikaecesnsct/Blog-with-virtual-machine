FROM nginx:alpine
COPY build /usr/share/nginx/html
COPY sample.conf /etc/nginx/conf.d/default.conf

