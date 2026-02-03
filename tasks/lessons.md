# Lecciones Aprendidas

## 1. Spring Boot + JPA requiere DataSource configurado
**Patrón**: Cuando se agrega `spring-boot-starter-data-jpa`, Spring Boot intenta autoconfigurar un DataSource. Si no hay configuración explícita de BD ni driver en el classpath, falla con `Failed to determine a suitable driver class`.

**Solución**: 
- Agregar H2 como BD embebida en `pom.xml`
- Configurar DataSource en `application.yaml`:
```yaml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
```

## 2. Las dependencias de test no existen como "data-jpa-test" o "webmvc-test"
**Patrón**: Spring Boot proporciona `spring-boot-starter-test` como dependencia unificada para testing. Buscar dependencias inexistentes como `spring-boot-starter-data-jpa-test` causa errores de compilación.

**Solución**: Usar siempre `spring-boot-starter-test` que incluye JUnit, Mockito, y herramientas web.

## 3. CORS configuration debe ser explícita para cliente local
**Patrón**: El navegador bloquea solicitudes CORS por defecto. Una clase `WebMvcConfigurer` con `addCorsMappings()` es necesaria para permitir solicitudes desde diferentes orígenes.

**Aplicación**: Implementada en `CorsConfig.java` con `allowedOriginPatterns("*")` para desarrollo.

## 4. Mantener estilos CSS separados del HTML
**Patrón**: Aunque CSS inline en `<style>` funciona, separar en `styles.css` mantiene:
- Código más limpio y mantenible
- Reutilización en múltiples archivos
- Mejor caché del navegador

**Aplicación**: Movido CSS de `index.html` a `styles.css` con `<link rel="stylesheet">`.

## 5. Aplicar reglas de desarrollo consistentemente
**Patrón**: No basta con hacer el trabajo; debe seguir protocolos:
- Markear tareas como in-progress/completed
- Diagnosticar bugs autónomamente sin esperar
- Actualizar lecciones después de arreglar problemas
- Verificar antes de marcar completo

**Aplicación**: Al recibir feedback, revisé `.github/agents/rules.md` y apliqué automáticamente.

