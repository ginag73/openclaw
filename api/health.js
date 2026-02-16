// ============================================
// HEALTH CHECK ENDPOINT
// ============================================
// This is the simplest endpoint in the app.
// It just returns "ok" so we can verify the app is running.
//
// URL: yourapp.vercel.app/api/health
// Method: GET
// Response: { status: "ok", timestamp: "2026-02-13T..." }
// ============================================

export default function handler(req, res) {
  // Send back a simple JSON response
  // The timestamp tells us exactly when this was checked
  res.status(200).json({
    status: "ok",
    app: "OpenClaw",
    timestamp: new Date().toISOString()
  });
}
