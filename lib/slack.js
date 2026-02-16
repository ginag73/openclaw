// ============================================
// SLACK HELPER FUNCTIONS
// ============================================
// These functions send alerts to your Slack channels.
// Used by: almost everything — new leads, payments, errors, daily reports
//
// Slack docs: https://api.slack.com/messaging/webhooks
// ============================================

// Your Slack webhook URL (stored safely in .env.local)
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

/**
 * Send a message to Slack.
 * Uses a "webhook URL" — a special URL that posts to your channel.
 *
 * TODO (Phase 2): Implement webhook call
 */
export async function sendAlert(message) {
  // Will be implemented in Phase 2
  console.log("Slack alert (not sent yet):", message);
}
