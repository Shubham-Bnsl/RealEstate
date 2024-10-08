import { createListing } from "../controller/listing.controller.js";
import express from 'express'
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, createListing)

export default router