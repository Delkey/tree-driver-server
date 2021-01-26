import { IResolvers } from "graphql-tools";
import { CreatePassengerMutationArgs, CreatePassengerResponse } from "src/merged/graph";
import { Passenger } from "../../../entity/Passenger";
import logger from "../../../lib/logger";
import { cleanNullArgs } from "../../../util/nullCleaner";

export const resolver: IResolvers = {
  Mutation: {
    CreatePassenger: async (_: void, { passenger }: CreatePassengerMutationArgs): Promise<CreatePassengerResponse> => {
      try {
        const notNullPassenger = cleanNullArgs(passenger);
        await Passenger.save(notNullPassenger);
        return { ok: true, error: null };
      } catch (error) {
        logger.error(error.message);
        return { ok: false, error: "탑승자 등록 오류!" };
      }
    },
  },
};
