const Stripe = require('stripe');

module.exports = async function handler(req, res) {
  // Allow CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY is not set' });
  }

  // 1. Read affiliate cookie
  const cookie = req.headers.cookie
    ?.split('; ')
    .find(row => row.startsWith('ca_affiliate_id='));
  const affiliateId = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';

  try {
    // 2. Create Stripe checkout WITH affiliate ID
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID || 'price_XXXX', // Set STRIPE_PRICE_ID in Vercel (same price as your Payment Link)
          quantity: 1
        }
      ],
      success_url: 'https://freeclipping.com/success',
      cancel_url: 'https://freeclipping.com/cancel',
      metadata: {
        ca_affiliate_id: affiliateId
      }
    });

    // 3. Send checkout URL back to browser
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Stripe checkout failed' });
  }
};
