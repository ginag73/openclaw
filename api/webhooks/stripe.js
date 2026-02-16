// ============================================
// STRIPE WEBHOOK
// ============================================
// This endpoint receives data from Stripe when a payment happens.
//
// What happens when a customer pays:
// 1. Stripe sends payment data here (amount, customer email, product)
// 2. We verify the payment is real (security check)
// 3. We auto-enroll them in Teachable (course access)
// 4. We auto-invite them to Circle (forum access)
// 5. We fire Klaviyo events (starts onboarding emails)
// 6. We alert the team in Slack
//
// URL: yourapp.vercel.app/api/webhooks/stripe
// Method: POST (Stripe sends data to us)
// ============================================

export default async function handler(req, res) {
  // Only accept POST requests (that's what Stripe sends)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the payment data that Stripe sent us
    const event = req.body;

    // Log it so we can see what's coming in
    console.log("Stripe webhook received:", event.type);

    // TODO (Phase 3): Verify this is really from Stripe (signature check)
    // TODO (Phase 3): Handle "checkout.session.completed" event
    // TODO (Phase 3): Auto-enroll in Teachable
    // TODO (Phase 3): Auto-invite to Circle
    // TODO (Phase 4): Fire Klaviyo events
    // TODO (Phase 2): Send Slack alert

    // Tell Stripe we received it successfully
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
