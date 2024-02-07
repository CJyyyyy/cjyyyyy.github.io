# cjyyyyy.github.io


docker run --restart=always --name=nginx -p 80:80 \
 -v /usr/local/docker/nginx/conf:/etc/nginx \
 -v /usr/local/docker/nginx/html:/usr/share/nginx/html \
 -v /usr/local/docker/nginx/logs:/var/log/nginx \
 -d nginx