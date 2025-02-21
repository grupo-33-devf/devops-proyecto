# De qué imagen nos basamos
FROM node:20.18.2-alpine3.20

# Definimos directorio de trabajo
WORKDIR /api

# Copiamos el repositorio dentro de la imagen
COPY package*.json .

# Instalamos dependencias dentro de la imagen
RUN npm install

COPY . .

EXPOSE 8080

# Comando que se ejecuta al levantar un contenedor
CMD [ "npm", "run", "dev:watch" ]