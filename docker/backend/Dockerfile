FROM node:20.11-slim

LABEL maintainer="Aprire"

# Environment
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# Update & install system packages
RUN apt-get update
RUN apt-get install -y \
    procps \
    less \
    vim \
    curl \
    unzip \
    sudo

# # Install global npm packages
# RUN npm i -g @nestjs/cli

USER node

# Workdir
WORKDIR /app

# Install npm packages
COPY --chown=node:node ./backend/package.json ./
COPY --chown=node:node ./backend/package-lock.json ./

RUN npm ci

# Copy File
COPY --chown=node:node ./backend ./

# Run entrypoint
COPY --chown=node:node ./docker/backend/entrypoint.sh /
RUN chmod 777 /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]