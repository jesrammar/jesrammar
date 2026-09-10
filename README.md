<p align="center">
  <img src="assets/hero.svg" width="100%" alt="Jesús Ramírez · Backend Developer · Java, Spring Boot, React y PostgreSQL" />
</p>

<p align="center">
  Ingeniería del Software · Universidad de Sevilla<br />
  Desarrollo productos completos con foco en backend Java/Spring Boot.
</p>

<p align="center">
  <a href="mailto:jramirezsoftware@gmail.com"><strong>Email</strong></a> &nbsp; / &nbsp;
  <a href="https://www.linkedin.com/in/jes%C3%BAs-ram%C3%ADrez-mart%C3%ADnez-901685412/"><strong>LinkedIn</strong></a> &nbsp; / &nbsp;
  <a href="#enterpriseiq"><strong>EnterpriseIQ</strong></a> &nbsp; / &nbsp;
  <a href="https://github.com/jesrammar/spring-dicebear-proxy-cache"><strong>Proxy + Cache</strong></a>
</p>

Busco mi primera oportunidad profesional en desarrollo. Me interesa trabajar en APIs, integraciones y procesamiento de datos, con pruebas automatizadas y una operación bien documentada.

## Proyectos seleccionados

<a id="enterpriseiq"></a>

<img src="assets/enterpriseiq.svg" width="100%" alt="EnterpriseIQ: plataforma para consultoras que convierte CSV y XLSX en análisis, presupuestos, costes e informes" />

Mi proyecto principal: una plataforma para que una consultora gestione varias empresas y transforme sus ficheros operativos y financieros en información para decidir. Integra autenticación por roles y empresa, normalización de datos, análisis y entregables HTML/PDF.

**Java 21 · Spring Boot · React / TypeScript · PostgreSQL · Flyway · Docker**

El código de EnterpriseIQ es privado. [Contacta conmigo para conocer el proyecto](mailto:jramirezsoftware@gmail.com?subject=EnterpriseIQ).

<details>
<summary><strong>Explorar la arquitectura de EnterpriseIQ</strong></summary>

<br />
<img src="assets/architecture.svg" width="100%" alt="Arquitectura: React consume una API Spring Boot monolítica modular; PostgreSQL y un volumen guardan datos y ficheros; Actuator, Prometheus, Grafana y Alertmanager aportan observabilidad" />

El backend concentra seguridad, ingesta, análisis, automatización e informes en un único proceso Java. PostgreSQL conserva el estado y un volumen almacena ficheros. La configuración de producción incorpora servicios separados de observabilidad.

</details>

<br />

<a href="https://github.com/jesrammar/spring-dicebear-proxy-cache">
  <img src="assets/proxy-cache.svg" width="100%" alt="Proxy + Cache: integración con DiceBear, caché Caffeine, reintentos Resilience4j y pruebas WireMock" />
</a>

API que centraliza el consumo de DiceBear, evita llamadas repetidas con caché y controla fallos transitorios con reintentos. Incluye pruebas con WireMock, documentación OpenAPI, Actuator y CI con Maven.

[**Explorar código, pruebas y ejecución →**](https://github.com/jesrammar/spring-dicebear-proxy-cache)

## Ingeniería en el repositorio

<img src="assets/code-snapshot.svg" width="100%" alt="EnterpriseIQ: 340 archivos Java, 68 TypeScript, 33 SQL, 6 JavaScript, 5 CSS, 4 HTML y 2 Shell; 30 archivos Java de pruebas y 28 migraciones Flyway" />

<sub>Instantánea del código de EnterpriseIQ. Los archivos de pruebas y las migraciones forman parte del gráfico; no son sumas adicionales. [Datos y método del recuento](data/repository-snapshot.json).</sub>

---

Diseño de APIs · Seguridad · Testing · CI · Observabilidad<br />
**Construir, comprobar y documentar.**
