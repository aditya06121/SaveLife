import { ApiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import { Request } from "../models/request.models.js";
import mongoose from "mongoose";

const raiseRequest = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    // if (!user) {
    //   throw new ApiError(401, "Invalid refresh token");
    // }

    // if (incomingRefreshToken !== user?.refreshToken) {
    //   throw new ApiError(401, "Refresh token is expired or used");
    // }

    const { bloodType, location, requestBy, fulfilled } = req.body;

    const request = await Request.create({
      bloodType,
      location,
      requestBy,
      fulfilled,
    });

    if (!request) {
      throw new ApiError(
        500,
        "Something went wrong while registering the request"
      );
    }

    return res
      .status(201)
      .json(new ApiResponse(201, request, "Blood Donation request generated"));
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

const fulfillRequest = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const { requestId } = req.params; // Get request ID from URL

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
      throw new ApiError(400, "Invalid request ID format");
    }

    const request = await Request.findById(requestId);

    if (!request) {
      throw new ApiError(404, "Request does not exist");
    }

    if (request.fulfilled) {
      throw new ApiError(400, "This request has already been fulfilled");
    }

    // Update the fulfilled status
    request.fulfilled = true;
    await request.save();

    return res
      .status(200)
      .json(new ApiResponse(200, request, "Request fulfilled successfully"));
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new ApiError(401, "Invalid refresh token");
    }
    throw new ApiError(500, "Something went wrong: " + error.message);
  }
});

const checkRequest = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    // Verify the refresh token
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    // Check for pending requests in the database (fulfilled: false)
    const pendingRequests = (await Request.find({ fulfilled: false })) || [];

    // Ensure pendingRequests is an array before checking .length
    if (!Array.isArray(pendingRequests) || pendingRequests.length === 0) {
      return res
        .status(404)
        .json(new ApiResponse(404, [], "No pending requests found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, pendingRequests, "Pending requests found"));
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new ApiError(401, "Invalid refresh token");
    }
    throw new ApiError(500, "Something went wrong: " + error.message);
  }
});

export { raiseRequest, fulfillRequest, checkRequest };
