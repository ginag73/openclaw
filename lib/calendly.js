// ============================================
// CALENDLY HELPER FUNCTIONS
// ============================================
// These functions talk to the Calendly API.
// Used by: api/webhooks/calendly.js, api/cron/hourly.js
//
// Calendly docs: https://developer.calendly.com/api-docs
// ============================================

// Your Calendly API token (stored safely in .env.local)
const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;

/**
 * Verify that a webhook really came from Calendly (not a fake request).
 * This prevents hackers from sending fake booking data to your app.
 *
 * TODO (Phase 2): Implement signature verification
 */
export function verifyWebhook(req) {
  // Will be implemented in Phase 2
  return true;
}

/**
 * Get recent bookings from Calendly.
 * Used by the hourly cron job to catch any bookings the webhook missed.
 *
 * TODO (Phase 2): Implement API call
 */
export async function getRecentBookings() {
  // Will be implemented in Phase 2
  return [];
}

/**
 * Get available time slots for scheduling a follow-up call.
 * Used by the WhatsApp bot when you say "book a call with Sarah".
 *
 * TODO (Phase 7): Implement API call
 */
export async function getAvailability(date) {
  // Will be implemented in Phase 7
  return [];
}
