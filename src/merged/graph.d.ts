export const typeDefs = ["input ICreatePassenger {\n  name: String!\n  cellPhone: String\n  postalCode: String\n  address1: String\n  address2: String\n  hopeDays: [Int]\n}\n\ntype CreatePassengerResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreatePassenger(passenger: ICreatePassenger!): CreatePassengerResponse!\n  DeletePassenger(id: Int!): DeletePassengerResponse!\n  EditPassenger(passenger: IEditPassenger!): EditPassengerResponse!\n}\n\ntype DeletePassengerResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput IEditPassenger {\n  id: Int!\n  name: String!\n  cellPhone: String\n  postalCode: String\n  address1: String\n  address2: String\n  hopeDays: [Int]\n}\n\ntype EditPassengerResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetPassengerResponse {\n  ok: Boolean!\n  error: String\n  passenger: Passenger\n}\n\ntype Query {\n  GetPassenger(id: Int!): GetPassengerResponse!\n  GetPassengers(search: ISearch): GetPassengersResponse!\n}\n\ninput ISearch {\n  name: String\n  cellPhone: String\n  hopeDays: [Int]\n}\n\ntype GetPassengersResponse {\n  ok: Boolean\n  error: String\n  passengers: [Passenger]\n}\n\nscalar Date\n\ntype Passenger {\n  id: Int\n  name: String\n  cellPhone: String\n  postalCode: String\n  address1: String\n  address2: String\n  hopeDays: [Int]\n  createdAt: Date\n  updatedAt: Date\n}\n"];
/* tslint:disable */

export interface Query {
  GetPassenger: GetPassengerResponse;
  GetPassengers: GetPassengersResponse;
}

export interface GetPassengerQueryArgs {
  id: number;
}

export interface GetPassengersQueryArgs {
  search: ISearch | null;
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
  hopeDays: Array<number> | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export type Date = any;

export interface ISearch {
  name: string | null;
  cellPhone: string | null;
  hopeDays: Array<number> | null;
}

export interface GetPassengersResponse {
  ok: boolean | null;
  error: string | null;
  passengers: Array<Passenger> | null;
}

export interface Mutation {
  CreatePassenger: CreatePassengerResponse;
  DeletePassenger: DeletePassengerResponse;
  EditPassenger: EditPassengerResponse;
}

export interface CreatePassengerMutationArgs {
  passenger: ICreatePassenger;
}

export interface DeletePassengerMutationArgs {
  id: number;
}

export interface EditPassengerMutationArgs {
  passenger: IEditPassenger;
}

export interface ICreatePassenger {
  name: string;
  cellPhone: string | null;
  postalCode: string | null;
  address1: string | null;
  address2: string | null;
  hopeDays: Array<number> | null;
}

export interface CreatePassengerResponse {
  ok: boolean;
  error: string | null;
}

export interface DeletePassengerResponse {
  ok: boolean;
  error: string | null;
}

export interface IEditPassenger {
  id: number;
  name: string;
  cellPhone: string | null;
  postalCode: string | null;
  address1: string | null;
  address2: string | null;
  hopeDays: Array<number> | null;
}

export interface EditPassengerResponse {
  ok: boolean;
  error: string | null;
}
