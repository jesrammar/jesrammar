# Mantenimiento de la portada

Las seis imágenes de `assets/` son SVG autocontenidos. No cargan fuentes remotas, scripts, imágenes enlazadas ni servicios de estadísticas.

Regenerar los gráficos, sin instalar dependencias:

```sh
node scripts/render-profile.mjs
```

`data/repository-snapshot.json` registra los recuentos totales y por proyecto, fecha, revisiones y método. El gráfico suma EnterpriseIQ, spring-dicebear-proxy-cache y ecommerce-store, incluido su código Python. Las métricas de pruebas Java y migraciones Flyway pertenecen solo a EnterpriseIQ. Es una instantánea, no una lectura en directo ni una medida de dominio técnico. Actualizar el snapshot al cambiar el código y regenerar los SVG. No se guardan tokens ni credenciales.

La arquitectura resume `docs/architecture/enterpriseiq-overview.architecture.json` de EnterpriseIQ. Ingesta, análisis, informes, automatización y auditoría son responsabilidades internas del monolito Spring Boot, no microservicios separados.

La portada presenta EnterpriseIQ primero, spring-dicebear-proxy-cache segundo y ecommerce-store tercero. Los elementos nativos de **Pinned** se gestionan aparte en GitHub; editar este README no modifica sus pins. EnterpriseIQ es público y su tarjeta enlaza directamente al repositorio.
