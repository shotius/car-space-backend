import userService from 'services/user.service';
import httpStatus from 'http-status';
import { ApiError } from './../utils/functions/ApiError';
import UserVerification from 'models/user-verification.model';
import User from 'models/user.model';

const deleteHash = async (hashId: string) => {
  return await UserVerification.findByIdAndDelete(hashId);
};

const verify = async (hash: string) => {
  const foundHash = await UserVerification.findOne({ hash });

  if (!foundHash) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Provided token is outdated');
  }

  const user = await User.findById(foundHash.userId);

  if (!user) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'Failed to activate!'
    );
  }

  const verifiedUser = await userService.undelete(user.id);

  if (verifiedUser) {
    await deleteHash(foundHash.id);
  }

  return verifiedUser;
};

const getAll = async () => {
  return await UserVerification.find({}).populate('user');
};

const addHash = async ({ hash, userId }: { hash: string; userId: string }) => {
  const newHast = new UserVerification({
    hash,
    userId,
  });

  return await newHast.save();
};

const verificationService = {
  verify,
  getAll,
  addHash,
  deleteHash
};
export default verificationService;
