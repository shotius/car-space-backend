import {
  IUserInfo,
  RoleTypes,
} from '../../shared_with_front/types/types-shared';
import authServices from 'services/auth.services';
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import verificationService from 'services/user-verification.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { success } from 'utils/functions/responseApi';
import { ApiError } from '../utils/functions/ApiError';

const verificationRouter = express.Router();

// -- Get all hashes
verificationRouter.get('/', async (_req, res) => {
  const hashes = await verificationService.getAll();

  return res.json(hashes);
});

// -- Add hash
verificationRouter.post('/', async (req, res) => {
  const { hash, userId } = req.body;

  const newHash = await verificationService.addHash({ hash, userId });

  res.json({ hash, userId, newHash });
});

// -- Verify hash
verificationRouter.get(
  '/:hash',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const hash = req.params.hash;

    const user = await verificationService.verify(hash);
    
    if (!user) {
      return next(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
    }

    authServices.addUserSession(req, user);

    const response: IUserInfo = {
      id: user.id,
      role: user.role.toLowerCase() as RoleTypes,
      isAuthenticated: true,
      fullName: user.fullName,
      phone: user.phone,
      avatar: user.avatar,
      email: user.email,
    };

    return res.send(
      success({
        results: response,
      })
    );
  })
);

export default verificationRouter;
