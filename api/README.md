# Create Checkout API

This serverless function creates a Stripe Checkout session and passes the `ca_affiliate_id` cookie into session metadata for affiliate attribution.

## Deploy (e.g. Vercel)

1. Install dependencies: `npm install`
2. Set environment variables:
   - **STRIPE_SECRET_KEY** – Your Stripe secret key (e.g. `sk_live_...`)
   - **STRIPE_PRICE_ID** – The price ID used in your Payment Link (e.g. `price_1234...`). Find it in Stripe Dashboard → Products → your product → Pricing.
3. Deploy so the API is on the same domain as your site (e.g. `https://freeclipping.com/api/create-checkout`) so the `ca_affiliate_id` cookie is sent.

## Flow

1. User visits with `?ref=affiliate123` → cookie `ca_affiliate_id=affiliate123` is set.
2. User submits the form → frontend POSTs to `/api/create-checkout` with `credentials: 'same-origin'` (cookie is sent).
3. API reads the cookie, creates a Stripe Checkout session with `metadata.ca_affiliate_id`, returns `{ url }`.
4. Frontend redirects to `url`. If the API is unavailable, it falls back to the direct Stripe Payment Link.
