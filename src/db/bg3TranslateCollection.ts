import { ObjectId } from "mongodb";
import { DOS2TranslateClient } from "./connectDB";

export const findTranslateCollection = async (limit: number) => {
  const client = (await DOS2TranslateClient()).collection("bg3TranslateVer2");
  const result = await client
    .find({
      "content.thai": null,
    })
    .limit(limit)
    .toArray();

  return result;
};

export const updateTranslateCollection = async (_id: string, content: string) => {
  const client = (await DOS2TranslateClient()).collection("bg3TranslateVer2");
  const result = await client.updateOne({
      _id: new ObjectId(_id),
    },
    {
      $set: {
        "content.thai": content,
      },
    }
  );
  return result;
}

export const updateError = async (_id: string) => {
  const client = (await DOS2TranslateClient()).collection("bg3TranslateVer2");
  const result = await client.updateOne({
      _id: new ObjectId(_id),
    },
    {
      $set: {
        "content.errorTranslate": true,
      },
    }
  );
  return result;
}
