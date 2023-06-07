import { User } from './users.model';

// auto generated incremental id
const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastUser?.id;
};

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || String(0).padStart(5, '0');

  // increment by 1
  const incrementedId = (Number(currentId) + 1).toString().padStart(5, '0');
  return String(incrementedId);
};
