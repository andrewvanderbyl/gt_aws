import { CreateClub } from "../../remote/ClubService";

export const useClub = () => {
  const createClub = async (props) => {
    return await CreateClub(props).then((clubData) => {
      return clubData;
    });
  };

  return { createClub };
};
