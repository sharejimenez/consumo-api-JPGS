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

## Reflexiones
1. **Ventajas de los servicios en Angular**: Facilitan la reutilización y separación de lógica de negocio.
2. **Importancia de separar la lógica de negocio de la lógica de presentación**: Mejora la mantenibilidad y escalabilidad.
3. **Posibles integraciones de APIs**: APIs de autenticación, pagos, geográficas, sociales, y meteorológicas.
## Tecnologías
-Angular: Framework utilizado para desarrollar la aplicación frontend.
-RxJS: Biblioteca de programación reactiva utilizada para manejar las solicitudes HTTP y las respuestas.
-Angular Material: Para la creación de componentes de interfaz como tablas y controles de paginación.
-NgxPagination: Para implementar la paginación en la lista de usuarios.
## Pruebas
Las capturas del proyecto en el servidor están en la carpeta imagenes
## Conclusión
El uso de APIs y servicios en Angular permite crear aplicaciones modulares, escalables y fáciles de mantener.
