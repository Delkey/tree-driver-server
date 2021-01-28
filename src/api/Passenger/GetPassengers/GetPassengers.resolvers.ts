import { IResolvers } from "graphql-tools";
import { GetPassengersQueryArgs, GetPassengersResponse } from "src/merged/graph";
import { Brackets } from "typeorm";
import { Passenger } from "../../../entity/Passenger";
import logger from "../../../lib/logger";

export const resolver: IResolvers = {
  Query: {
    GetPassengers: async (_: void, args: GetPassengersQueryArgs): Promise<GetPassengersResponse> => {
      try {
        const search = args.search ? args.search : null;
        const createQueryBuilder = Passenger.createQueryBuilder();

        if (search) {
          if (search.name) {
            createQueryBuilder.andWhere("name LIKE :name", { name: `%${search.name}%` });
          }
          if (search.cellPhone) {
            createQueryBuilder.andWhere("cellPhone LIKE :cellPhone", { cellPhone: `%${search.cellPhone}%` });
          }
          if (search.hopeDays) {
            createQueryBuilder.andWhere(
              new Brackets((qb) => {
                search.hopeDays.forEach((day, i) => {
                  if (i === 0) {
                    qb.where(`:day${i} = ANY("hopeDays")`, { [`day${i}`]: day });
                  } else {
                    qb.orWhere(`:day${i} = ANY("hopeDays")`, { [`day${i}`]: day });
                  }
                });
              })
            );
          }
        }

        const passengers: Passenger[] = await createQueryBuilder.getMany();
        return { ok: true, error: null, passengers };
      } catch (error) {
        console.log(error);
        logger.error(error.message);
        return { ok: false, error: "탑승자 목록 조회 오류!", passengers: null };
      }
    },
  },
};
