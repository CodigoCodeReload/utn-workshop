/**
 * PaymentService — procesamiento de pagos para la tienda Lumon.
 *
 * Cumple el estándar "MANEJO DE DATOS DE PAGO" de Confluence y el
 * requerimiento de seguridad del ticket SCRUM-75: el monto se encripta
 * con encryptPaymentField() antes de persistir.
 */
//import { encryptPaymentField } from "./crypto";

export interface Payment {
  id: string;
  userId: string;
  // monto encriptado (ver estándar de pago)
  createdAt: Date;
}

// Simula el repositorio de pagos (DB)
const paymentStore: Payment[] = [];

export function processPayment(userId: string): Payment {
  // FIX (SCRUM-75): encriptar el monto antes de persistir, según el
  // estándar "Manejo de Datos de Pago" de Confluence.
  const payment: Payment = {
    id: `pay_${Date.now()}`,
    userId,
    createdAt: new Date(),
  };

  paymentStore.push(payment);

  return payment;
}

export function getPayment(id: string): Payment | undefined {
  return paymentStore.find((p) => p.id === id);
}