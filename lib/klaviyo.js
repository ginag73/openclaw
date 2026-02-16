// ============================================
// KLAVIYO HELPER FUNCTIONS
// ============================================
// These functions talk to the Klaviyo API for email marketing.
// Used by: api/webhooks/calendly.js, api/webhooks/stripe.js, api/cron/daily.js
//
// Klaviyo docs: https://developers.klaviyo.com/en/reference
// ============================================

// Your Klaviyo API key (stored safely in .env.local)
const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;

/**
 * Add or update a customer profile in Klaviyo.
 * Called when a new lead comes in from Calendly.
 *
 * TODO (Phase 4): Implement API call
 */
export async function addProfile(customer) {
  // Will be implemented in Phase 4
}

/**
 * Track an event in Klaviyo (e.g., "Booked Call", "Made Purchase").
 * Events trigger email flows automatically.
 *
 * TODO (Phase 4): Implement API call
 */
export async function trackEvent(email, eventName, properties) {
  // Will be implemented in Phase 4
}
