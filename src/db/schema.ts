// const mongoose = require("mongoose");
import mongoose from "mongoose";

// const engToThaiSchema = new mongoose.Schema(
//   {
//     content: {
//       type: {
//         contentuid: { type: String, required: true },
//         content: { type: String, required: true },
//         thaiContent: { type: String },
//       },
//       errorTranslate: { type: Boolean, default: false },
//       required: true,
//     },
//   },
//   { _id: true }
// );

// export const EngToThai = mongoose.model(
//   "engToThai",
//   engToThaiSchema,
//   "engToThai"
// );

const bg3TranslateVer2 = new mongoose.Schema(
  {
    content: {
      type: {
        contentuid: { type: String, required: true },
        content: { type: String, required: true },
        thai: { type: String },
        version: { type: String },
        notTranslate: {type: Boolean, default: false},
      },
      errorTranslate: { type: Boolean, default: false },
      required: true,
    },
  },
  { _id: true }
);

export const Bg3TranslateVer2Model = mongoose.model(
  "bg3TranslateVer2",
  bg3TranslateVer2,
  "bg3TranslateVer2"
);
