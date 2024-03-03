import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface User {
  id: string;
  isAdmin: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.token as string;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_SEC as string, (err: jwt.VerifyErrors | null, user: any) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      req.user = user;
      next();
    });
  } else {
     res.status(401).json({ error: 'Unauthorized' });
  }
};

const verifyTokenAndAuthorization = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, () => {
    if (req.user?.id === req.params.id || req.user?.isAdmin) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  });
};

const verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, () => {
    if (req.user?.isAdmin) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
