import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  raiseRequest,
  fulfillRequest,
  checkRequest,
} from "../controllers/req_res.controller.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/request").post(raiseRequest);
router.route("/fulfill/:requestId").put(fulfillRequest);
router.route("/check-request").get(checkRequest);

export default router;
