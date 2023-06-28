FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html

COPY config/nginx/nginx.conf /etc/nginx/conf.d/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]