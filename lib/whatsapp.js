// ============================================
// WHATSAPP HELPER FUNCTIONS (via Twilio)
// ============================================
// These functions send and receive WhatsApp messages.
// This is how the OpenClaw bot communicates with you.
//
// Twilio docs: https://www.twilio.com/docs/whatsapp
// ============================================

// Your Twilio credentials (stored safely in .env.local)
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATSAPP_NUMBER;

/**
 * Send a WhatsApp reply back to the user.
 * Called after the AI processes your message and has an answer.
 *
 * TODO (Phase 7): Implement Twilio API call
 */
export async function sendReply(toPhone, message) {
  // Will be implemented in Phase 7
  console.log("WhatsApp reply (not sent yet):", toPhone, message);
}

/**
 * Verify that an incoming message really came from Twilio.
 * Prevents fake messages from being processed.
 *
 * TODO (Phase 7): Implement signature verification
 */
export function verifyWebhook(req) {
  // Will be implemented in Phase 7
  return true;
}
