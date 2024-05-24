import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";


const stripe= new Stripe(process.env.STRIPE_SECRET_KEY)



const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5174" 

    try {
        // Extracting data from the request body
        // const { userId, items, amount, address } = req.body;
    
        // Creating a new order in the database
        const newOrder = new orderModel({
          userId: req.body.userId,
          items: req.body.items,
          amount: req.body.amount,
          address: req.body.address,
        });
        await newOrder.save();
    
        // Clearing the user's cart
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    
        // Creating line items for Stripe checkout
        const line_items = req.body.items.map((item) => ({
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100 * 80,
          },
          quantity: item.quantity,
        }));
    
        // Adding delivery charges
        line_items.push({
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Delivery Charges',
            },
            unit_amount: 2 * 100 * 80,
          },
          quantity: 1,
        });
    
        // Creating a Stripe checkout session
        const session = await stripe.checkout.sessions.create({
          line_items: line_items,
          mode: 'payment',
          success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
          cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });
    
        res.json({ success: true, session_url: session.url });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error creating order' });
      }
}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
  
    try {
      if (success === "true") {
        await orderModel.findByIdAndUpdate(orderId, { payment: true });
        res.json({ success: true, message: "Paid" });
      } else {
        await orderModel.findByIdAndDelete(orderId);
        res.json({ success: false, message: "Not Paid" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  }

  const userOrders = async (req, res) => {
    try {
      const orders = await orderModel.find({ userId: req.body.userId });
      res.json({ success: true, data: orders });
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Error fetching orders" });
    }
  };
  

  const listOrders = async (req, res) => {
    try {
      const orders = await orderModel.find({});
      res.json({ success: true, data: orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.json({ success: false, message: "errpr" });
    }
  };

export{placeOrder,verifyOrder,userOrders,listOrders}