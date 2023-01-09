const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    content: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    ordered_by: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Orders", orderSchema);
