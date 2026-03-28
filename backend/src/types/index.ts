export interface User {
  id: string;
  name: string;
  email: string;
  password_hash?: string;
  google_id?: string;
  created_at: Date;
}

export interface JwtPayload {
  userId: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}