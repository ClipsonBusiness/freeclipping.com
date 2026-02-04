const Stripe = require('stripe');

// Stripe Checkout Sessions only (no Payment Links). Use existing price.
const STRIPE_PRICE_ID = 'price_1SxA7ELDafoVnYnRP2cB1iLA';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY is not set' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // Read affiliate cookie from request
  const cookie = req.headers.cookie
    ?.split('; ')
    .find(row => row.startsWith('ca_affiliate_id='));
  const affiliateId = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      success_url: 'https://freeclipping.com/success',
      cancel_url: 'https://freeclipping.com/cancel',
      metadata: {
        ca_affiliate_id: affiliateId
      }
    });

    // Return session URL as JSON
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Stripe checkout failed' });
  }
};
