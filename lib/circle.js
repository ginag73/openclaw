// ============================================
// CIRCLE HELPER FUNCTIONS
// ============================================
// These functions talk to the Circle API for community forum access.
// Used by: api/webhooks/stripe.js (auto-invite after payment)
//
// Circle docs: https://api.circle.so
// ============================================

// Your Circle API token (stored safely in .env.local)
const CIRCLE_API_TOKEN = process.env.CIRCLE_API_TOKEN;

/**
 * Invite a new member to the Circle community.
 * Called after a customer pays — gives them forum access.
 *
 * TODO (Phase 3): Implement API call
 */
export async function addMember(email, name, spaceIds) {
  // Will be implemented in Phase 3
}

/**
 * Remove a member from the Circle community.
 * Called by the daily cron when access expires.
 *
 * TODO (Phase 6): Implement API call
 */
export async function removeMember(email) {
  // Will be implemented in Phase 6
}
