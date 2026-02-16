// ============================================
// AI HELPER FUNCTIONS (Claude API)
// ============================================
// These functions use Claude (Anthropic's AI) to understand
// natural language messages from WhatsApp.
//
// Example: You text "How many leads today?"
//   → AI classifies this as: { action: "check_leads", timeframe: "today" }
//   → Your app queries BigQuery and replies with the count
//
// Anthropic docs: https://docs.anthropic.com/en/docs
// ============================================

// Your Anthropic API key (stored safely in .env.local)
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

/**
 * Classify what the user wants from their WhatsApp message.
 * Returns an action and any relevant details.
 *
 * Possible actions:
 *   check_leads    → "How many leads today?"
 *   revenue_report → "What's revenue this week?"
 *   book_meeting   → "Book a call with Sarah next Tuesday"
 *   send_emails    → "Send nurture to yesterday's leads"
 *   hot_leads      → "Who are the hot leads?"
 *   vibe_code      → "Add a company size field to the form"
 *
 * TODO (Phase 7): Implement Claude API call
 */
export async function classifyIntent(message) {
  // Will be implemented in Phase 7
  return { action: "unknown", message: message };
}
