import { IResolvers } from "graphql-tools";
import { EditPassengerMutationArgs, EditPassengerResponse } from "src/merged/graph";
import { Passenger } from "../../../entity/Passenger";
import logger from "../../../lib/logger";
import { cleanNullArgs } from "../../../util/nullCleaner";

export const resolver: IResolvers = {
  Mutation: {
    EditPassenger: async (_: void, { passenger }: EditPassengerMutationArgs): Promise<EditPassengerResponse> => {
      try {
        const { id } = passenger;
        delete passenger.id;
        const notNullPassenger = cleanNullArgs(passenger);
        await Passenger.update({ id }, notNullPassenger);
        return { ok: true, error: null };
      } catch (error) {
        logger.error(error.message);
        return { ok: false, error: "탑승자 변경 오류!" };
      }
    },
  },
};
