import config from "../../../config/config";

const stripe = require("stripe")(config.stripe_sk);
const createPayment = async (price: number) => {
  const amount = Number(price) * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  return paymentIntent.client_secret;
};

export const paymentServices = {
  createPayment,
};
