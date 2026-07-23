import mongoose, { Schema, Model, models } from "mongoose";



const OrderItemSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    goldWeight: {
      type: Number,
      required: true,
    },

    goldType: {
      type: String,
      required: true,
    },

    stoneType: {
      type: String,
      default: "",
    },

    unitPrice: {
      type: Number,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  }
);





const OrderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    goldPrice: {
      type: Number,
      required: true,
    },

    items: {
      type: [OrderItemSchema],
      required: true,
    },

    totalQuantity: {
      type: Number,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: [
        "pending",
        "paid",
        "failed",
      ],
      default: "pending",
    },

    orderStatus: {
      type: String,
      enum: [
        "new",
        "processing",
        "shipped",
        "completed",
        "cancelled",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);





const Order: Model<any> =
  models.Order ||
  mongoose.model("Order", OrderSchema);

export default Order;