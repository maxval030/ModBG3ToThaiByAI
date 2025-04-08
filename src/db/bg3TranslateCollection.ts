import { ObjectId } from "mongodb";
import { DOS2TranslateClient, mongooseConnect } from "./connectDB";
import { Bg3TranslateVer2Model } from "./schema";

// export const findTranslateCollection = async (limit: number) => {
//   const client = (await DOS2TranslateClient()).collection("bg3TranslateVer2");
//   const result = await client
//     .find({
//       "content.thai": null,
//     })
//     .limit(limit)
//     .toArray();

//   return result;
// };
export const findTranslateCollection = async (limit: number) => {

  await mongooseConnect();
  
  const result = await Bg3TranslateVer2Model.find({
    "content.thai": null,}).limit(limit).exec();

  return result;
};

export const updateTranslateCollection = async (_id: string, content: string) => {
  await mongooseConnect();

  const result = await Bg3TranslateVer2Model.updateOne({
      _id: new ObjectId(_id),
    },
    {
      $set: {
        "content.thai": content,
      },
    }
  ).exec();
  
  return result;
}
// export const updateTranslateCollection = async (_id: string, content: string) => {
//   const client = (await DOS2TranslateClient()).collection("bg3TranslateVer2");
//   const result = await client.updateOne({
//       _id: new ObjectId(_id),
//     },
//     {
//       $set: {
//         "content.thai": content,
//       },
//     }
//   );
//   return result;
// }

export const updateError = async (_id: string) => {
  await mongooseConnect();
 
  await Bg3TranslateVer2Model.updateOne({
      _id: new ObjectId(_id),
    },
    {
      $set: {
        "content.errorTranslate": true,
      },
    }
  );
}
