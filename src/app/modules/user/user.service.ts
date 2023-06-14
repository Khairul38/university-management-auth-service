import config from '../../../config';
import { ApiError } from '../../../errors/apiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

export const createUserToDB = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId();
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (createdUser) {
    return createdUser;
  } else {
    throw new ApiError(400, 'Failed to create user!');
  }
};
