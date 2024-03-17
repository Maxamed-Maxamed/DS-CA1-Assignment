import { marshall } from "@aws-sdk/util-dynamodb";
import { Movie, MovieCast, movieReviews } from "./types";

type Entity = Movie | MovieCast | movieReviews;  // NEW
export const generateItem = (entity: Entity) => {
  return {
    PutRequest: {
      Item: marshall(entity),
    },
  };
};

export const generateBatch = (data: Entity[]) => {
  return data.map((e) => {
    return generateItem(e);
  });
};