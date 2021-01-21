import { IResolvers } from "graphql-tools";
import { GetPassengerQueryArgs, GetPassengerResponse } from "src/merged/graph";
import { Passenger } from "../../../entity/Passenger";
import logger from "../../../lib/logger";

export const resolver: IResolvers = {
  Query: {
    GetPassenger: async (_: void, { id }: GetPassengerQueryArgs): Promise<GetPassengerResponse> => {
      try {
        const passenger: Passenger = await Passenger.findOne({ id });
        return { ok: true, error: null, passenger };
      } catch (error) {
        logger.error(error);
        return { ok: true, error: "탑승자 조회 오류!", passenger: null };
      }
    },
  },
};
