// ============================================
// DAILY CRON JOB
// ============================================
// Vercel runs this once per day at 8:00 AM UTC.
//
// What it does:
// 1. Checks for members whose access expires in 14/7/1 days
// 2. Sends expiry warning emails via Klaviyo
// 3. Removes access for expired members (Teachable + Circle)
// 4. Sends daily sales summary to Slack
//
// URL: yourapp.vercel.app/api/cron/daily
// Schedule: Every day at 8 AM UTC (set in vercel.json)
// ============================================

export default async function handler(req, res) {
  // Security: only allow Vercel's cron system to call this
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    console.log("Daily cron started:", new Date().toISOString());

    // TODO (Phase 6): Check for expiring access (14d, 7d, 1d)
    // TODO (Phase 6): Send expiry warnings via Klaviyo
    // TODO (Phase 6): Remove expired access from Teachable + Circle
    // TODO (Phase 6): Send daily sales summary to Slack

    res.status(200).json({
      message: "Daily cron complete",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Daily cron failed:", error);
    // TODO (Phase 2): Alert team in Slack when cron fails
    res.status(500).json({ error: error.message });
  }
}
