import { Router } from 'express';
import {
  register,
  login,
  refresh,
  logout,
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);

// Protected test route — confirms middleware works
router.get('/me', protect, (req, res) => {
  res.status(200).json({
    message: 'You are authenticated ✅',
    user: req.user,
  });
});

export default router;