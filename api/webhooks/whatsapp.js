// ============================================
// WHATSAPP WEBHOOK (OpenClaw Bot)
// ============================================
// This endpoint receives messages from WhatsApp via Twilio.
//
// What happens when you send a WhatsApp message:
// 1. Twilio forwards your message here
// 2. AI (Claude) figures out what you're asking
// 3. We run the right action (check leads, revenue, book meeting, etc.)
// 4. We send the answer back to WhatsApp
//
// Example messages you can send:
//   "How many leads today?" → queries BigQuery, replies with count
//   "What's revenue this week?" → queries Stripe, replies with total
//   "Book a follow-up with Sarah" → creates Calendly event
//
// URL: yourapp.vercel.app/api/webhooks/whatsapp
// Method: POST (Twilio sends messages to us)
// ============================================

export default async function handler(req, res) {
  // Only accept POST requests (that's what Twilio sends)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the message data from Twilio
    const message = req.body.Body;       // What you typed
    const fromPhone = req.body.From;     // Your phone number

    console.log("WhatsApp message received:", message, "from:", fromPhone);

    // TODO (Phase 7): Verify this is really from Twilio
    // TODO (Phase 7): Send message to AI for intent classification
    // TODO (Phase 7): Run the appropriate action
    // TODO (Phase 7): Send reply back via WhatsApp

    // For now, just acknowledge we received it
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
