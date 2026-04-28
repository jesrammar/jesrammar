<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:0b3b60,100:16a34a&height=170&section=header&text=Jes%C3%BAs%20R.%20%7C%20Backend%20Developer&fontColor=ffffff&fontSize=34&fontAlignY=40&desc=Java%20%C2%B7%20Spring%20Boot%20%C2%B7%20REST%20APIs%20%C2%B7%20Testing%20%C2%B7%20Resiliencia&descAlignY=62&animation=fadeIn" alt="Banner de perfil de Jesús R." />
</p>

<p align="center">
  <strong>Jesús R. | Backend Developer</strong><br />
  Java · Spring Boot · REST APIs · Testing · Resiliencia<br />
  Disponible para prácticas de verano 2026 + posible incorporación
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Java%20%2B%20Spring%20Boot-0f172a?style=flat-square&logo=spring&logoColor=6DB33F" alt="Backend Java Spring Boot" />
  <img src="https://img.shields.io/badge/Formaci%C3%B3n-%C3%9Altimo%20a%C3%B1o%20Ingenier%C3%ADa%20del%20Software-0f172a?style=flat-square&logo=bookstack&logoColor=93c5fd" alt="Último año Ingeniería del Software" />
  <img src="https://img.shields.io/badge/Disponibilidad-Verano%202026-0f172a?style=flat-square&logo=calendar&logoColor=22c55e" alt="Disponible Verano 2026" />
</p>

<p align="center">
  <a href="mailto:villalbero14@gmail.com">
    <img src="https://img.shields.io/badge/Email-villalbero14%40gmail.com-0f172a?style=for-the-badge&logo=gmail&logoColor=white&labelColor=111827" alt="Email" />
  </a>
  <a href="https://www.linkedin.com/in/jes%C3%BAs-ram%C3%ADrez-mart%C3%ADnez/">
    <img src="https://img.shields.io/badge/LinkedIn-Jes%C3%BAs%20Ram%C3%ADrez%20Mart%C3%ADnez-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=111827" alt="LinkedIn" />
  </a>
  <a href="https://github.com/jesrammar/spring-dicebear-proxy-cache">
    <img src="https://img.shields.io/badge/Proyecto%20principal-spring--dicebear--proxy--cache-16a34a?style=for-the-badge&logo=github&logoColor=white&labelColor=111827" alt="Proyecto principal" />
  </a>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1500&center=true&vCenter=true&width=900&color=E5E7EB&lines=APIs+limpias%2C+testeables+y+documentadas;Cach%C3%A9%2C+resiliencia%2C+CI+y+mentalidad+de+producci%C3%B3n" alt="Resumen profesional" />
</p>

## Sobre mí

Soy estudiante de **Ingeniería Informática - Ingeniería del Software**, en último año, y estoy orientando mi entrada al mercado hacia **equipos backend Java/Spring Boot** que trabajen con **APIs, integraciones y calidad de software**.

Mi foco está en construir servicios que no solo funcionen, sino que además sean **mantenibles, testeables, observables y fáciles de evolucionar**. Me interesa especialmente el backend que se acerca a producción: contratos claros, fallos controlados, documentación útil y automatización de calidad.

En mis proyectos trabajo con especial atención a:

- **APIs REST** limpias y bien estructuradas.
- **Testing automatizado** con `JUnit 5` y `WireMock`.
- **Caché en memoria** con `Caffeine` para reducir latencia y llamadas innecesarias.
- **Resiliencia** con `Resilience4j` en integraciones con servicios externos.
- **Documentación de API** con `OpenAPI / Swagger`.
- **CI** con `GitHub Actions`.
- **Mentalidad de producción**: observabilidad, claridad operativa y código fácil de mantener.

Actualmente busco **prácticas de verano 2026 como Backend Developer Java/Spring Boot**, idealmente con **posibilidad de incorporación**.

## Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=java,spring,maven,postgres,docker,git,github,githubactions,linux&theme=dark" alt="Stack principal" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JUnit%205-0f172a?style=flat-square&logo=junit5&logoColor=25A162" alt="JUnit 5" />
  <img src="https://img.shields.io/badge/WireMock-0f172a?style=flat-square&logoColor=white" alt="WireMock" />
  <img src="https://img.shields.io/badge/OpenAPI%20%2F%20Swagger-0f172a?style=flat-square&logo=swagger&logoColor=85EA2D" alt="OpenAPI / Swagger" />
</p>

## Proyecto destacado

### [spring-dicebear-proxy-cache](https://github.com/jesrammar/spring-dicebear-proxy-cache)

Servicio backend en **Spring Boot** que actúa como **proxy frente a una API externa**, reduciendo llamadas repetidas mediante **caché**, añadiendo **resiliencia ante fallos** y exponiendo **documentación y observabilidad**.

**Qué problema resuelve**

- Evita consumir directamente el proveedor externo en cada petición.
- Reduce llamadas repetidas y mejora el comportamiento ante latencia, errores o rate limiting.
- Añade una capa backend controlada, documentada y preparada para crecer con criterios de calidad.

**Stack usado**

`Java 21` · `Spring Boot 3` · `WebClient` · `Caffeine` · `Resilience4j` · `OpenAPI / Swagger` · `Spring Actuator` · `JUnit 5` · `WireMock` · `GitHub Actions`

**Qué demuestra técnicamente**

- Diseño de una API backend con integración real hacia terceros.
- Desacoplo del proveedor externo mediante una capa propia de servicio.
- Optimización del consumo externo con caché.
- Resiliencia aplicada a llamadas remotas.
- Testing automatizado para validar comportamiento y escenarios de integración.
- Documentación y observabilidad integradas en el propio servicio.

**Arranque rápido**

```bash
mvn spring-boot:run
```

Si mantienes la configuración por defecto, la documentación y los endpoints operativos suelen quedar accesibles en:

- `Swagger UI`: `http://localhost:8080/swagger-ui/index.html`
- `OpenAPI`: `http://localhost:8080/v3/api-docs`
- `Actuator`: `http://localhost:8080/actuator`

## Otros proyectos

### [EnterpriseIQ](https://github.com/jesrammar/EnterpriseIQ)
Plataforma orientada a consultoría con backend en `Java 21 + Spring Boot`, `PostgreSQL`, `Flyway`, observabilidad con `Actuator + Prometheus + Grafana` e infraestructura con `Docker`. Refuerza perfil de arquitectura por capas, roles, operación y despliegue.

### [ecommerce-store](https://github.com/jesrammar/ecommerce-store)
Proyecto académico de ecommerce con `Django`, pagos con `Stripe`, panel de gestión y documentación amplia. Aporta contexto full-stack, pero mi foco profesional actual está en **backend Java/Spring Boot**.

## Cómo trabajo

- Pull requests con cambios acotados, contexto claro y foco en revisión.
- Commits atómicos y trazables.
- Testing automatizado como red de seguridad antes de integrar.
- Documentación útil para desarrollo, consumo y operación.
- Código mantenible, legible y fácil de extender.
- CI con validaciones automáticas para reducir regresiones.
- Mentalidad de producto: pienso en robustez, errores, operabilidad y evolución.
- Comunicación clara y trabajo en equipo.

## Métricas

<p align="center">
  <img alt="Top languages" height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=jesrammar&layout=compact&langs_count=8&size_weight=0.5&count_weight=0.5&hide_title=true&theme=transparent" />
</p>

<p align="center">
  <img alt="Activity graph" src="https://github-readme-activity-graph.vercel.app/graph?username=jesrammar&theme=github-dark&bg_color=0d1117&color=9be9a8&line=2ea043&point=58a6ff&hide_border=true&radius=8&area=true" />
</p>
