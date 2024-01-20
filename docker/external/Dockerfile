# Base on offical NGINX Alpine image
FROM nginx:1.23.3-alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./docker/external/templates/default.template.conf /etc/nginx/templates/default.template.conf
COPY ./src/external/ /var/www

# Expose the listening port
EXPOSE 5050

# Generate /etc/nginx/conf.d/default.conf
RUN /bin/sh -c "envsubst < /etc/nginx/templates/default.template.conf > /etc/nginx/conf.d/default.conf"
# Launch NGINX
CMD nginx -t && nginx -g 'daemon off;'
