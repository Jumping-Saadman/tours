import express from 'express'
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
  getUserBySearch
} from '../controllers/userController.js';
const router = express.Router()

import {verifyAdmin,verifyUser} from "../utils/verifyToken.js"

// update new User
router.put('/:id', verifyUser, updateUser);

// delete new User
router.delete('/:id', verifyUser, deleteUser);

// get single User
router.get('/:id', verifyUser , getSingleUser);

// get All User
router.get('/', verifyAdmin,getAllUser);

// get User by search
router.get('/name', verifyUser, getUserBySearch)

export default router;