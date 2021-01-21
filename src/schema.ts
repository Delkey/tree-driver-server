import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { GraphQLSchema } from "graphql";
import "graphql-import-node";
import { IResolvers, makeExecutableSchema } from "graphql-tools";
import path from "path";

const allTypes: string[] = loadFilesSync(path.join(__dirname, "./api/**/*.graphql"));
const allResolvers: IResolvers[] = loadFilesSync(path.join(__dirname, "./api/**/*.resolvers.*"));
const mergedTypes = mergeTypeDefs(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

export default schema;
