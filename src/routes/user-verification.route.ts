import express, { Request, Response } from 'express';
import verificationService from 'services/user-verification.service';
import { asyncHandler } from 'utils/functions/asyncHandler';

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
  asyncHandler(async (req: Request, res: Response) => {
    const hash = req.params.hash;

    const verify = await verificationService.verify(hash);

    res.send(verify);
  })
);

export default verificationRouter;
