export const typeDefs = ["input ICreatePassenger {\n  name: String!\n  cellPhone: String\n  postalCode: String\n  address1: String\n  address2: String\n  hopeDays: Int\n}\n\ntype CreatePassengerResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreatePassenger(passenger: ICreatePassenger!): CreatePassengerResponse!\n}\n\ntype GetPassengerResponse {\n  ok: Boolean!\n  error: String\n  passenger: Passenger\n}\n\ntype Query {\n  GetPassenger(id: Int!): GetPassengerResponse!\n}\n\ntype Passenger {\n  id: Int\n  name: String\n  cellPhone: String\n  postalCode: String\n  address1: String\n  address2: String\n  hopeDays: Int\n}\n"];
/* tslint:disable */

export interface Query {
  GetPassenger: GetPassengerResponse;
}

export interface GetPassengerQueryArgs {
  id: number;
}

export interface GetPassengerResponse {
  ok: boolean;
  error: string | null;
  passenger: Passenger | null;
}

export interface Passenger {
  id: number | null;
  name: string | null;
  cellPhone: string | null;
  postalCode: string | null;
  address1: string | null;
  address2: string | null;
  hopeDays: number | null;
}

export interface Mutation {
  CreatePassenger: CreatePassengerResponse;
}

export interface CreatePassengerMutationArgs {
  passenger: ICreatePassenger;
}

export interface ICreatePassenger {
  name: string;
  cellPhone: string | null;
  postalCode: string | null;
  address1: string | null;
  address2: string | null;
  hopeDays: number | null;
}

export interface CreatePassengerResponse {
  ok: boolean;
  error: string | null;
}
