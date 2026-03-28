import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';
import type { JwtPayload } from '../types/index.js';

// Helper: generate tokens
const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
  });
};

const generateRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  });
};

// @route  POST /api/auth/register
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  const existingUser = await pool.query(
    'SELECT id FROM users WHERE email = $1', [email]
  );

  if (existingUser.rows.length > 0) {
    res.status(409).json({ message: 'Email already registered' });
    return;
  }

  const password_hash = await bcrypt.hash(password, 12);

  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash)
     VALUES ($1, $2, $3) RETURNING id, name, email, created_at`,
    [name, email, password_hash]
  );

  const user = result.rows[0];
  const payload: JwtPayload = { userId: user.id, email: user.email };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Store refresh token in DB
  await pool.query(
    'UPDATE users SET refresh_token = $1 WHERE id = $2',
    [refreshToken, user.id]
  );

  res.status(201).json({
    message: 'User registered successfully',
    user: { id: user.id, name: user.name, email: user.email },
    accessToken,
    refreshToken,
  });
};

// @route  POST /api/auth/login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1', [email]
  );

  const user = result.rows[0];

  if (!user || !user.password_hash) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);

  if (!isMatch) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const payload: JwtPayload = { userId: user.id, email: user.email };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  await pool.query(
    'UPDATE users SET refresh_token = $1 WHERE id = $2',
    [refreshToken, user.id]
  );

  res.status(200).json({
    message: 'Login successful',
    user: { id: user.id, name: user.name, email: user.email },
    accessToken,
    refreshToken,
  });
};

// @route  POST /api/auth/refresh
export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(401).json({ message: 'Refresh token required' });
    return;
  }

  try {
    const decoded = jwt.verify(
      refreshToken, process.env.JWT_REFRESH_SECRET!
    ) as JwtPayload;

    const result = await pool.query(
      'SELECT * FROM users WHERE id = $1 AND refresh_token = $2',
      [decoded.userId, refreshToken]
    );

    if (result.rows.length === 0) {
      res.status(403).json({ message: 'Invalid refresh token' });
      return;
    }

    const payload: JwtPayload = { userId: decoded.userId, email: decoded.email };
    const newAccessToken = generateAccessToken(payload);

    res.status(200).json({ accessToken: newAccessToken });
  } catch {
    res.status(403).json({ message: 'Invalid or expired refresh token' });
  }
};

// @route  POST /api/auth/logout
export const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(400).json({ message: 'Refresh token required' });
    return;
  }

  await pool.query(
    'UPDATE users SET refresh_token = NULL WHERE refresh_token = $1',
    [refreshToken]
  );

  res.status(200).json({ message: 'Logged out successfully' });
};