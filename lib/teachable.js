// ============================================
// TEACHABLE HELPER FUNCTIONS
// ============================================
// These functions talk to the Teachable API for course access.
// Used by: api/webhooks/stripe.js (auto-enroll after payment)
//
// Teachable docs: https://developers.teachable.com
// ============================================

// Your Teachable API key (stored safely in .env.local)
const TEACHABLE_API_KEY = process.env.TEACHABLE_API_KEY;

/**
 * Enroll a student in a course after they pay.
 * Finds or creates the user, then adds them to the course.
 *
 * TODO (Phase 3): Implement API call
 */
export async function enrollStudent(email, name, courseId) {
  // Will be implemented in Phase 3
}

/**
 * Remove a student's access when their subscription expires.
 * Called by the daily cron job.
 *
 * TODO (Phase 6): Implement API call
 */
export async function removeAccess(email, courseId) {
  // Will be implemented in Phase 6
}
