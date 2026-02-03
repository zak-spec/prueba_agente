# Cliente API - Hola Mundo

Cliente web para consumir la API REST de Spring Boot.

## Uso

1. Abre el archivo `index.html` en tu navegador (puedes arrastrar el archivo a la ventana del navegador)
2. Haz clic en el botón "Llamar API (Hola Mundo)"
3. Verás la respuesta del servidor Spring Boot

## Requisitos

- El servidor Spring Boot debe estar ejecutándose en `http://localhost:8080`
- El navegador debe permitir solicitudes CORS (está configurado en el servidor)

## Archivos

- `index.html` - Interfaz HTML con estilos
- `script.js` - Lógica para consumir la API
- `README.md` - Este archivo

## Configuración

Si el servidor está en un puerto diferente, edita `script.js` y cambia:

```javascript
const API_URL = 'http://localhost:8080/api/hello';
```

Por la URL correcta de tu servidor.
