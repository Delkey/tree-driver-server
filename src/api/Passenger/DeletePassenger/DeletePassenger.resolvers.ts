import { IResolvers } from "graphql-tools";
import { DeletePassengerMutationArgs, DeletePassengerResponse } from "src/merged/graph";
import { Passenger } from "../../../entity/Passenger";
import logger from "../../../lib/logger";

export const resolver: IResolvers = {
  Mutation: {
    DeletePassenger: async (_: void, { id }: DeletePassengerMutationArgs): Promise<DeletePassengerResponse> => {
      try {
        await Passenger.delete({ id });
        return { ok: true, error: null };
      } catch (error) {
        logger.error(error.message);
        return { ok: false, error: "탑승자 삭제 오류!" };
      }
    },
  },
};
