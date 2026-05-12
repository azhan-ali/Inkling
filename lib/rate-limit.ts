/**
 * Simple in-memory rate limiter.
 *
 * Allows MAX_REQUESTS per IP per WINDOW_MS.
 * Entries older than WINDOW_MS are pruned on every check.
 *
 * Good enough for launch day — swap for Upstash Redis in v2.
 */

const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

interface Entry {
  count: number;
  windowStart: number;
}

const store = new Map<string, Entry>();

/**
 * Returns true if the request is allowed, false if rate-limited.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Prune stale entries to prevent memory leak on long-running server.
  for (const [key, entry] of store.entries()) {
    if (now - entry.windowStart > WINDOW_MS) {
      store.delete(key);
    }
  }

  const entry = store.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    // New window
    store.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

/**
 * Returns how many requests remain in the current window for an IP.
 */
export function getRemainingRequests(ip: string): number {
  const entry = store.get(ip);
  if (!entry || Date.now() - entry.windowStart > WINDOW_MS) return MAX_REQUESTS;
  return Math.max(0, MAX_REQUESTS - entry.count);
}
