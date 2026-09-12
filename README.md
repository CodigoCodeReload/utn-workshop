# Workshop Virgilio — Desafío Code Guardian

## El caso

`PaymentService.ts` procesa pagos para la tienda. Todos los checks automáticos pasan:

- ✓ Build compila
- ✓ Tests unitarios en verde
- ✓ SonarQube: sin code smells críticos

**Pero no debería mergearse**: viola un requerimiento de seguridad del ticket de Jira y un estándar documentado en Confluence. Ni el linter ni SonarQube leen Confluence ni Jira — ahí es donde Virgilio va a buscarlo.

## El desafío (para vos, asistente)

1. Abrí el ticket de Jira **SCRUM-75** y la página de Confluence **"Estándar — Manejo de Datos de Pago"** (están vinculados entre sí).
2. Creá tu branch desde `main` (ej. `juan-fix`).
3. Aplicá el fix siguiendo el estándar de Confluence (el patrón correcto está ahí).
4. Abrí un Pull Request contra `main`.
5. **Code Guardian (Virgilio)** va a revisar tu PR automáticamente y dejar el veredicto como comentario.

## Pistas

- El estándar de Confluence nombra la función exacta que hay que usar.
- El veredicto de Virgilio te va a decir qué requisito falta cubrir y en qué archivo.
- Si tu PR está verde y sin hallazgos: ¡lo lograste!

## Referencias

- Ticket Jira: https://codigocode.atlassian.net/browse/SCRUM-75
- Estándar de pago (Confluence): ver link en el ticket