const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 🔹 READ AFFILIATE COOKIE (SERVER-SIDE)
    const cookie = req.headers.cookie
      ?.split('; ')
      .find(row => row.startsWith('ca_affiliate_id='));

    const affiliateId = cookie
      ? decodeURIComponent(cookie.split('=')[1])
      : '';

    // 🔹 CREATE CHECKOUT SESSION WITH METADATA
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: 'price_1SxA7ELDafoVnYnRP2cB1iLA',
          quantity: 1
        }
      ],
      success_url: 'https://freeclipping.com/success',
      cancel_url: 'https://freeclipping.com/cancel',

      // 🚨 THIS IS THE MOST IMPORTANT PART
      metadata: {
        ca_affiliate_id: affiliateId
      }
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Checkout failed' });
  }
}

module.exports = handler;
