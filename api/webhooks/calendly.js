// ============================================
// CALENDLY WEBHOOK
// ============================================
// This endpoint receives data from Calendly when someone books a call.
//
// What happens when a prospect books:
// 1. Calendly sends booking data here (name, email, time, answers)
// 2. We save the lead to BigQuery
// 3. We send a Slack alert to the team
// 4. We add the prospect to Klaviyo (starts email flow)
//
// URL: yourapp.vercel.app/api/webhooks/calendly
// Method: POST (Calendly sends data to us)
// ============================================

export default async function handler(req, res) {
  // Only accept POST requests (that's what Calendly sends)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the booking data that Calendly sent us
    const booking = req.body;

    // Log it so we can see what's coming in (helpful for debugging)
    console.log("Calendly webhook received:", JSON.stringify(booking));

    // TODO (Phase 2): Verify this is really from Calendly (security check)
    // TODO (Phase 2): Save lead to BigQuery
    // TODO (Phase 2): Send Slack alert
    // TODO (Phase 4): Add to Klaviyo

    // Tell Calendly we received it successfully
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Calendly webhook error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
