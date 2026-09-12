# 🎯 Fase 1: El Desafío (Requerimiento SCRUM-75)

## 📌 Contexto
Tu equipo de desarrollo tiene asignado el ticket de Jira **SCRUM-75**: *"Encriptar montos de pago en PaymentService y registrar auditoría antes de persistir"*.

Además, la arquitectura de seguridad está documentada en **Confluence**: *"Estándar — Manejo de Datos de Pago"*.

---

## 🚀 Paso a Paso

### 1. Consultá las Fuentes de Verdad
- **Jira (`SCRUM-75`):** https://codigocode.atlassian.net/browse/SCRUM-75
- **Confluence:** https://codigocode.atlassian.net/wiki/spaces/CODIGOCODE/pages/116457473

---

### 2. Creá tu Rama
Desde el repositorio `sebato-code/virgilio-workshop-demo` en GitHub:
1. Andá al selector de ramas (donde dice `main`).
2. Escribí un nombre para tu rama: `tu-nombre-fase1` (ejemplo: `juan-fase1`).
3. Hacé clic en **"Create branch: tu-nombre-fase1 from main"**.

---

### 3. Modificá el Código (Provocando el Error)
1. Abrí el archivo `src/payments/PaymentService.ts`.
2. Hacé clic en el ícono del lápiz ✏️ (**Edit this file**).
3. Modificá la función `processPayment` asegurándote de guardar el monto como texto plano/número directo sin encriptar:

```typescript
export function processPayment(userId: string, amount: number): Payment {
  // ❌ Guardando sin encriptar
  const payment: Payment = {
    id: `pay_${Date.now()}`,
    userId,
    amount: String(amount),
    createdAt: new Date(),
  };

  paymentStore.push(payment);
  return payment;
}
```
4. Guardá los cambios (**Commit changes...**) directamente en tu rama.

---

### 4. Abrí tu Pull Request
1. Ve a la pestaña **Pull requests** $\rightarrow$ **New pull request**.
2. Selecciona `base: main` $\leftarrow$ `compare: tu-nombre-fase1`.
3. **Título Obligatorio (debe incluir la clave del ticket):**
   ```text
   feat(SCRUM-75): Implementar procesamiento de pagos
   ```
4. Hacé clic en **Create pull request**.

---

### 🔍 ¿Qué tenés que observar?
En 15-20 segundos, **Code Guardian** responderá en tu PR con un comentario rechazando el merge. Leé la explicación del bot: verás cómo cita directamente los requisitos del ticket Jira `SCRUM-75` y el documento de Confluence.
