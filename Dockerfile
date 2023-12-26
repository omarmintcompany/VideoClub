# Usa una imagen de Node.js como base
FROM node:18

# Establece el directorio de trabajo en la carpeta 'app'
WORKDIR /app

# Copia el archivo package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Compila la aplicación Nuxt.js
RUN npm run build

# Expón el puerto en el que la aplicación Nuxt.js se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación Nuxt.js
CMD ["npm", "start"]
