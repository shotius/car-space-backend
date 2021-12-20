import express, { NextFunction, Request, Response } from 'express';
import verificationService from 'services/user-verification.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { verificationErrorHtml } from 'views/verificationErrorHtml';
import { ApiError } from './../utils/functions/ApiError';
import { verificationSuccessHtml } from './../views/verificationSuccessHtml';

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

    try {
      await verificationService.verify(hash);
      return res.send(
        verificationSuccessHtml('Account activated successfully!')
      );
    } catch (error) {
      if (ApiError.isApiError(error)) {
        return res.send(verificationErrorHtml(error.message));
      } else {
        return next(error);
      }
    }
  })
);

export default verificationRouter;
