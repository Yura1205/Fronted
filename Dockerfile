# Etapa de construcción node en el contenedor
FROM node:latest as build

# Crear un directorio y ubicarse dentro de él
WORKDIR /app

# Copiar todas las dependencias
COPY package.json ./
COPY package-lock.json ./

# Ejecutar este comando, cuando ya tenga en package.json:
# decirle al contenedor que lo instale cuando se descargue de git
RUN npm install

# Copiar todo: src, public, asset. Lo pone todo en la carpeta app
COPY . .

# Compilar la aplicación
RUN npm run build

EXPOSE 3275

