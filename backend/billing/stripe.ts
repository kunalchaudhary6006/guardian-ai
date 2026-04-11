import Stripe from 'stripe';
import { env } from '../config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const createCustomer = async (email: string) => {
  const customer = await stripe.customers.create({
    email,
    payment_methods: { allowed_types: ['card'] },
  });
  return customer.id;
};

export const createSubscription = async (customerId: string, priceId: string) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    expand: ['latest_invoice.payment_intent'],
  });
  return subscription.id;
};

export const handleWebhook = async (event: any) => {
  // Implement webhook handling
  console.log('Webhook event:', event.type);
};