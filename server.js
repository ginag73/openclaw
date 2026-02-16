// ============================================
// SERVER — Makes the app run on Railway
// ============================================
// This file starts a web server that listens for requests.
// Railway needs this to know how to run your app.
//
// Vercel doesn't need this file (it handles routing differently),
// but Railway does. Having both won't cause any issues.
// ============================================

import { createServer } from "node:http";

// Import all our API handlers
import healthHandler from "./api/health.js";
import calendlyHandler from "./api/webhooks/calendly.js";
import stripeHandler from "./api/webhooks/stripe.js";
import whatsappHandler from "./api/webhooks/whatsapp.js";
import hourlyHandler from "./api/cron/hourly.js";
import dailyHandler from "./api/cron/daily.js";

// Map URLs to their handlers
const routes = {
  "/api/health": healthHandler,
  "/api/webhooks/calendly": calendlyHandler,
  "/api/webhooks/stripe": stripeHandler,
  "/api/webhooks/whatsapp": whatsappHandler,
  "/api/cron/hourly": hourlyHandler,
  "/api/cron/daily": dailyHandler,
};

// Create the server
const server = createServer(async (req, res) => {
  // Parse the URL to get just the path (without query parameters)
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // Find the right handler for this URL
  const handler = routes[path];

  if (handler) {
    // Collect the request body (for POST requests like webhooks)
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      // Build a request object similar to what Vercel provides
      const fakeReq = {
        method: req.method,
        headers: req.headers,
        body: body ? JSON.parse(body) : {},
        url: req.url,
      };

      // Build a response object similar to what Vercel provides
      const fakeRes = {
        statusCode: 200,
        status(code) {
          this.statusCode = code;
          return this;
        },
        json(data) {
          res.writeHead(this.statusCode, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(data));
        },
      };

      // Run the handler
      try {
        await handler(fakeReq, fakeRes);
      } catch (error) {
        console.error("Error handling request:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal server error" }));
      }
    });
  } else {
    // No handler found for this URL
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found", path: path }));
  }
});

// Start listening — Railway tells us which port to use via the PORT variable
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`OpenClaw server running on port ${PORT}`);
});
