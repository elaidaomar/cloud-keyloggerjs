FROM php:7.4-apache
RUN apt-get update && apt upgrade -y
Add . /var/www/html
RUN chown -R www-data:www-data /var/www
USER www-data
EXPOSE 80
