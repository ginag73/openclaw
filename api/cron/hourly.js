// ============================================
// HOURLY CRON JOB
// ============================================
// Vercel runs this every hour automatically.
//
// What it does:
// 1. Syncs any missed Calendly bookings (backup for webhooks)
// 2. Syncs any missed Stripe payments (backup for webhooks)
// 3. Enriches new leads that haven't been researched yet
//
// URL: yourapp.vercel.app/api/cron/hourly
// Schedule: Every hour at minute 0 (set in vercel.json)
// ============================================

export default async function handler(req, res) {
  // Security: only allow Vercel's cron system to call this
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    console.log("Hourly cron started:", new Date().toISOString());

    // TODO (Phase 6): Sync missed Calendly bookings
    // TODO (Phase 6): Sync missed Stripe payments
    // TODO (Phase 8): Enrich new leads

    res.status(200).json({
      message: "Hourly cron complete",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Hourly cron failed:", error);
    // TODO (Phase 2): Alert team in Slack when cron fails
    res.status(500).json({ error: error.message });
  }
}
