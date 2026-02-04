# Create Checkout API

Uses **Stripe Checkout Sessions** (not Payment Links). Creates a session with the existing price and passes the `ca_affiliate_id` cookie into session metadata for affiliate revenue tracking.

## Deploy (e.g. Vercel)

1. Install dependencies: `npm install`
2. Set environment variable:
   - **STRIPE_SECRET_KEY** – Your Stripe secret key (e.g. `sk_live_...`)
3. Deploy so the API is on the same domain as your site (e.g. `https://freeclipping.com/api/create-checkout`) so the `ca_affiliate_id` cookie is sent.

Price ID is fixed in code: `price_1SxA7ELDafoVnYnRP2cB1iLA` (no new Stripe products or prices).

## Flow

1. User visits with `?ref=affiliate123` → cookie `ca_affiliate_id=affiliate123` is set.
2. User clicks Buy / Checkout → frontend POSTs to `/api/create-checkout` with `credentials: 'same-origin'` (cookie is sent).
3. API reads the cookie, creates a Stripe Checkout Session with `metadata.ca_affiliate_id`, returns `{ url }`.
4. Frontend redirects to `session.url`.
