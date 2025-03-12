import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    bloodType: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    location: {
      type: String,
      required: true,
    },
    requestBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fulfilledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fulfilled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Request = mongoose.model("Request", requestSchema);
