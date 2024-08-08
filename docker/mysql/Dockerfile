FROM mysql:8.0

LABEL maintainer="Aprire"

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

ENV MYSQL_ROOT_PASSWORD password

COPY ./docker/mysql/my.cnf /etc/mysql/conf.d/my.cnf
COPY ./docker/mysql/initdb.d /docker-entrypoint-initdb.d
