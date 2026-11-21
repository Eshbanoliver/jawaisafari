import { BUSINESS_INFO } from '../data/safariData';

/**
 * Creates an encoded WhatsApp click-to-chat URL with a contextual message.
 */
export function createWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Pre-filled message for general safari inquiry
 */
export function getGeneralEnquiryUrl(): string {
  return createWhatsAppUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to enquire about your wildlife safaris in Jawai. Please share availability and details.`
  );
}

/**
 * Pre-filled message for a specific experience (Leopard Safari, Jeep Safari, Nature)
 */
export function getExperienceEnquiryUrl(experienceTitle: string): string {
  return createWhatsAppUrl(
    `Hello ${BUSINESS_INFO.name}, I am interested in booking the "${experienceTitle}". Could you please share the itinerary, timings, and availability?`
  );
}

/**
 * Pre-filled message for a specific package
 */
export function getPackageEnquiryUrl(packageName: string): string {
  return createWhatsAppUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to enquire about the "${packageName}" package. Please let me know the inclusions, duration, and available dates.`
  );
}

/**
 * Formatted message from the Contact / Booking form
 */
export interface SafariFormData {
  fullName: string;
  phone: string;
  preferredSafari: string;
  numberOfGuests: string;
  preferredDate: string;
  message?: string;
}

export function getFormSubmissionWhatsAppUrl(data: SafariFormData): string {
  const lines = [
    `*SAFARI BOOKING ENQUIRY - ${BUSINESS_INFO.name}*`,
    `----------------------------------------`,
    `*Name:* ${data.fullName}`,
    `*Phone:* ${data.phone}`,
    `*Safari Choice:* ${data.preferredSafari || 'Not specified'}`,
    `*Guests:* ${data.numberOfGuests || '1'}`,
    `*Preferred Date:* ${data.preferredDate || 'Flexible'}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    lines.push(`*Notes/Requests:* ${data.message.trim()}`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`Looking forward to experiencing the wilderness of Jawai.`);

  return createWhatsAppUrl(lines.join('\n'));
}
