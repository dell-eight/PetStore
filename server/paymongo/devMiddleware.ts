import type { IncomingMessage, ServerResponse } from "node:http";
import { createCheckoutSession } from "./checkout";

async function readJson(req: IncomingMessage) {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function sendJson(res: ServerResponse, statusCode: number, body: unknown) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

export async function handlePayMongoDevCheckout(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:5173";
    const result = await createCheckoutSession(await readJson(req), siteUrl, process.env.PAYMONGO_SECRET_KEY);
    sendJson(res, 200, result);
  } catch (error) {
    sendJson(res, 400, { error: error instanceof Error ? error.message : "Checkout could not be started." });
  }
}
