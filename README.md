# VideoClub App

Una aplicación Vue.js con Nuxt que utiliza la API DummyJSON para realizar peticiones dummy de login. La aplicación consta de 4 páginas: inicio, login, búsqueda de películas y detalles de película.
Páginas

    Inicio:
        Muestra un logo representativo de la aplicación.

    Login:
        Permite iniciar sesión en el sistema mediante peticiones a la API de DummyJSON.

    Búsqueda de Películas:
        Muestra un listado de películas basado en la búsqueda por título.

    Detalles de Película:
        Muestra información detallada sobre una película específica.

Funcionalidades

    Uso de un middleware para verificar el estado de inicio de sesión en todo momento.
    Utiliza Vuex para el manejo del estado global.
    Se ha dockerizado la solución para un despliegue sencillo.

Instalación

    Clona el repositorio:

    bash

git clone https://github.com/omarmintcompany/VideoClub.git

Navega al directorio del proyecto:

bash

cd VideoClub

Construye la imagen Docker:

bash

docker build -t videoclub .

Ejecuta el contenedor Docker:

bash

docker run -p 3000:3000 videoclub

Accede a la aplicación en tu navegador:

http://localhost:3000
