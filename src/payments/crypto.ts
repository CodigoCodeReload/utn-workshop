/**
 * crypto — utilidades de encriptación de campos sensibles.
 * Patrón definido en el estándar "Manejo de Datos de Pago" (Confluence).
 */

// Encripta un monto para persistencia (AES-256-GCM en producción real;
// acá simulado para el workshop).
/*export function encryptPaymentField(amount: number): string {
  // Simulación de encriptado con sal contextual
  return `enc:v1:${Buffer.from(String(amount)).toString("base64")}:${Date.now()}`;
}

export function decryptPaymentField(encrypted: string): number {
  const [, , b64] = encrypted.split(":");
  return Number(Buffer.from(b64, "base64").toString("utf-8"));
}*/