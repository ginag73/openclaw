// ============================================
// STRIPE HELPER FUNCTIONS
// ============================================
// These functions talk to the Stripe API for payments.
// Used by: api/webhooks/stripe.js, api/cron/daily.js
//
// Stripe docs: https://stripe.com/docs/api
// ============================================

// Your Stripe secret key (stored safely in .env.local)
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

/**
 * Verify that a webhook really came from Stripe.
 * Stripe signs every webhook with a secret — we check that signature.
 *
 * TODO (Phase 3): Implement signature verification
 */
export function verifyWebhook(req) {
  // Will be implemented in Phase 3
  return true;
}

/**
 * Create a checkout link for a customer.
 * After a sales call, send this link so they can pay.
 *
 * TODO (Phase 3): Implement checkout session creation
 */
export async function createCheckoutLink(customerEmail, productId) {
  // Will be implemented in Phase 3
  return "";
}

/**
 * Get recent payments from Stripe.
 * Used by the WhatsApp bot for revenue reports and by the daily cron.
 *
 * TODO (Phase 3): Implement API call
 */
export async function getRecentPayments(since) {
  // Will be implemented in Phase 3
  return [];
}
