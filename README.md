### Angular-Consumiendo una API
Este proyecto es una aplicación en Angular que consume la API de la escuela para listar usuarios. La aplicación obtiene datos de los usuarios a través de una API REST y los presenta en una tabla con paginación.


## Tabla de Contenidos
- [Objetivo](#objetivo)

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Estructura](#Estructura)
- [Refrexiones](#Reflexiones)
- [Tecnologías](#tecnologías)

- [Conclusión](#conclusión)
### Objetivo
Cree una aplicación en Angular que consume una API `https://api.escuelajs.co/api/v1/users` y muestre los datos de los usuarios en una tabla interactiva.


# Descripción

Este proyecto es una aplicación Angular que muestra una lista de usuarios obtenida desde una API externa. Muestra cómo consumir una API de usuarios en Angular usando componentes y servicios.Los usuarios se muestran con su ID, nombre, correo electrónico y rol. Además, se implementa paginación para facilitar la navegación a través de los dato
## Características

- Consumo de API externa para obtener la lista de usuarios.
- Visualización de los usuarios con detalles como ID, nombre, correo electrónico y rol.
- Implementación de paginación para la visualización de datos.
- Creación de una interfaz usando Angular Material y componentes personalizados.
## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/sharejimenez/consumo-api-JPGS.git
   cd proyecto
## Estructura
1. **Creación del proyecto en Angular**: 
   - Comando para crear el proyecto: `ng new consumo-api-JPGS`
2. **Servicio para consumir la API**: 
   - Archivo: `src/app/services/user.service.ts`
   - Método principal: `getUsers()` (realiza una solicitud GET a la API para obtener una lista de usuarios)
3. **Componente de la tabla de usuarios**:
   - Archivo: `src/app/components/user-list/user-list.component.ts`
   - Método `ngOnInit`: Inicializa la lista de usuarios.
4. **Vista de la tabla de usuarios**:
   - Archivo: `user-list.component.html`
   - Uso del bucle `*ngFor` para mostrar la lista de usuarios.
5. **Integración y ejecución**:
   - Integración del componente en `app.component.html`.
   - Ejecución: `ng serve`
## Preguntas
-Pregunta a: ¿Qué hace el método getUsers en este servicio?

El método getUsers en el servicio UserService tiene como objetivo obtener una
lista de usuarios desde una API externa.
Solicitud HTTP GET:
El método utiliza el HttpClient para realizar una solicitud HTTP de tipo GET a la URL
especificada en apiUrl, que apunta a la API de usuarios
(https://api.escuelajs.co/api/v1/users).
El método devuelve un Observable de tipo any[].

-Pregunta b: ¿Qué función cumple el método ngOnInit en el componente
UserListComponent?

Cumple con la función para cargar datos, inicializa la lista de usuarios al suscribirse
al servicio UserService, asegurando que this.users contenga la información
necesaria cuando el componente se renderiza.

-Pregunta c: ¿Para qué sirve el bucle *ngFor en Angular? Explica cómo se utiliza
en este ejemplo.

El bucle *ngFor en Angular sirve para iterar sobre listas o arreglos de datos en las plantillas HTML, permitiendo generar elementos dinámicamente a partir de los
elementos de una colección.
## Reflexiones
-1. ¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?
Los servicios permiten encapsular la lógica de negocio y las interacciones con APIs
en una única unidad, lo que facilita la organización del código y su mantenimiento.
Esto permite que diferentes componentes accedan a la misma funcionalidad sin
duplicar código. Al definir servicios, se puede reutilizar la lógica en múltiples
componentes, así mismo los servicios ayudan a mantener una clara separación
entre la lógica de presentación y la lógica de negocio.
-2. ¿Por qué es importante separar la lógica de negocio de la lógica de presentación?

Mantenibilidad: Cuando se separan estas lógicas, el código se vuelve más fácil de
entender y mantener. Los cambios en la lógica de negocio no afectan directamente
a la interfaz de usuario.
Escalabilidad: Permite escalar cada parte del sistema independientemente.
Reutilización: La lógica de negocio puede ser reutilizada en diferentes contextos.
-3. ¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?
APIs de autenticación: Para gestionar usuarios y sesiones, como OAuth o JWT.
APIs de pagos: Integraciones con plataformas como Stripe o PayPal para procesar
transacciones.
APIs geográficas: Servicios como Google Maps o OpenStreetMap para
funcionalidades relacionadas con mapas y localización.
APIs sociales: Integraciones con redes sociales como Facebook, Twitter o
Instagram para compartir contenido o autenticar usuarios.
APIs meteorológicas: Para obtener información sobre el clima actual y
pronósticos.
PokéAPI : Contiene información sobre Pokémon, incluyendo personajes,
habilidades y más, perfecta para crear aplicaciones relacionadas.
OpenWeather APIs: OpenWeather es un servicio online para proporcionar datos
meteorológicos globales y previsiones meteorológicas a través de APIs dedicadas,
es decir, interfaces de programación.
## Tecnologías
-Angular: Framework utilizado para desarrollar la aplicación frontend.
-RxJS: Biblioteca de programación reactiva utilizada para manejar las solicitudes HTTP y las respuestas.
-Angular Material: Para la creación de componentes de interfaz como tablas y controles de paginación.
-NgxPagination: Para implementar la paginación en la lista de usuarios.
## Pruebas
Las capturas del proyecto en el servidor están en la carpeta imagenes
## Conclusión
Las APIs son muy prácticas, permiten reutilizar funcionalidades ya implementadas.
En este trabajo cree un proyecto en angular y creamos un service para poder
consumir la API. Usando angular versión 18.2 el cual contiene lo necesario para
poder consumir las APIs. Las APIS ofrecen modularidad, reutilización y una clara
separación de responsabilidades, lo que facilita el mantenimiento y la escalabilidad
de las aplicaciones. Separar la lógica de negocio de la lógica de presentación es
crucial para mejorar la mantenibilidad del código, permitir pruebas más efectivas y
facilitar la colaboración entre equipos. Además, al integrar diferentes tipos de datos
y APIs, como las meteorológicas, sociales o de entretenimiento, los desarrolladores
pueden enriquecer sus aplicaciones y ofrecer experiencias más completas a los
usuarios.
