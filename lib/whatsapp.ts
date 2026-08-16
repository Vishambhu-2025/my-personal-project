export const WHATSAPP_PHONE_NUMBER = "919112143483";
export const WHATSAPP_BASE_URL = "https://wa.me/";

export interface BookingDetails {
  name: string;
  contactNumber: string;
  fromLocation: string;
  toLocation: string;
  date: string;
}

export function formatBookingMessage(details: BookingDetails): string {
  return `Hi Vishambhu Travels,

I would like to book a trip with the following details:

Name: ${details.name}
Contact Number: ${details.contactNumber}
From Location: ${details.fromLocation}
To Location: ${details.toLocation}
Travel Date: ${details.date}

Please get back to me with the details.`;
}

export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
}
