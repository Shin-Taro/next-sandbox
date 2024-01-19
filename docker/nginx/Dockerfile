# Base on offical NGINX Alpine image
FROM nginx:1.23.3-alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./docker/nginx/templates/default.template.conf /etc/nginx/templates/default.template.conf

# Expose the listening port
EXPOSE 8080

# Generate /etc/nginx/conf.d/default.conf
RUN /bin/sh -c "envsubst < /etc/nginx/templates/default.template.conf > /etc/nginx/conf.d/default.conf"
# Launch NGINX
CMD nginx -t && nginx -g 'daemon off;'
