import express from 'express';
import {
  createBooking,
  getAllBooking,
  getBooking,
  cancelBooking,
  getBookingByUserId,
  getMyBooking
} from "../controllers/bookingController.js";

import { verifyAdmin,verifyUser } from '../utils/verifyToken.js'

const router = express.Router();

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking) // queries: status, page, limit
router.patch('/cancel/:id', verifyUser, cancelBooking)
router.get('/user/:id', verifyUser, getBookingByUserId) // queries: status, page, limit
router.get('/mybooking', verifyUser, getMyBooking) // queries: status, page, limit

export default router;