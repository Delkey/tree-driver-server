import { IResolvers } from "graphql-tools";
import { GetPassengersQueryArgs, GetPassengersResponse } from "src/merged/graph";
import { Like } from "typeorm";
import { Passenger } from "../../../entity/Passenger";
import logger from "../../../lib/logger";

export const resolver: IResolvers = {
  Query: {
    GetPassengers: async (_: void, args: GetPassengersQueryArgs): Promise<GetPassengersResponse> => {
      try {
        const search = args.search ? args.search : null;
        const where = {};

        if (search) {
          if (search.name) {
            where[`name`] = Like(`%${search.name}%`);
          }
          if (search.cellPhone) {
            where[`cellPhone`] = Like(`%${search.cellPhone}%`);
          }
          if (search.hopeDays) {
            search.hopeDays.sort();
            where[`hopeDays`] = Like(`%${search.hopeDays.join(",")}%`);
          }
        }

        const passengers: Passenger[] = where ? await Passenger.find({ where }) : await Passenger.find();
        return { ok: true, error: null, passengers };
      } catch (error) {
        logger.error(error.message);
        return { ok: false, error: "탑승자 목록 조회 오류!", passengers: null };
      }
    },
  },
};
