// ============================================
// BIGQUERY HELPER FUNCTIONS
// ============================================
// These functions talk to Google BigQuery — your data warehouse.
// All leads, events, and enrichment data gets stored here.
// Metabase reads from BigQuery to show your dashboards.
//
// BigQuery docs: https://cloud.google.com/bigquery/docs
// ============================================

// Your Google Cloud project ID (stored safely in .env.local)
const GCP_PROJECT_ID = process.env.GCP_PROJECT_ID;

/**
 * Save a new lead to the leads table.
 * Called when someone books a Calendly call.
 *
 * TODO (Phase 5): Implement BigQuery insert
 */
export async function saveLead(lead) {
  // Will be implemented in Phase 5
  console.log("Lead saved (not yet):", lead);
}

/**
 * Track any event (video watch, email open, page visit, etc.)
 * Everything that happens gets stored as an event.
 *
 * TODO (Phase 5): Implement BigQuery insert
 */
export async function trackEvent(email, eventType, eventData) {
  // Will be implemented in Phase 5
  console.log("Event tracked (not yet):", eventType, email);
}

/**
 * Query leads (for the WhatsApp bot and dashboards).
 * Example: "How many leads today?" or "Show me hot leads"
 *
 * TODO (Phase 5): Implement BigQuery query
 */
export async function queryLeads(filters) {
  // Will be implemented in Phase 5
  return [];
}
