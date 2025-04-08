import {
  findTranslateCollection,
  updateError,
  updateTranslateCollection,
} from "./db/bg3TranslateCollection";

import { isEmpty, parallel, sleep } from "radash";
import { translateByAi } from "./connectAI";

let countErr = 0;

const index = async () => {
  let count = 1;
  let round = 1;
  const limit = 30;

  while (true) {
    const result = await findTranslateCollection(limit);
    // console.log("result>>>", result);

    if (isEmpty(result)) {
      console.log("loop break");
      break;
    }

    await parallel(limit / 2, result, async (item) => {
        let errId = false
      try {
        const translatedText = await translateByAi(item.content.content);

        await updateTranslateCollection(item._id.toString(), translatedText);

        console.log("DONE!!!", translatedText);
        await sleep(10000);
      } catch (err) {
        console.log("val._idError>>", item._id);
        errId = true
      } finally {
        if(errId){
        await updateError(item._id.toString());
        }
        errId = false
      }
    });

    console.log("ALL DONE", count, "Round>>>", round);

    if (count >= 40) {
      console.log("WAITING >>>>", "1 min");
      await sleep(40000);
      round = ++round;
      count = 1;
    } else {
      count = ++count;
      console.log("WAITING >>>>", "10s");
      await sleep(5000);
      // await sleep(7000);
    }
  }
};

const runAny = async () => {
  try {
    await index();
  } catch (err) {
    console.log("countErr>>>>", countErr);
    console.log("err>>>>", err);
    // if (countErr >= 10){
    //   console.log("countErr", countErr)

    //   return false;

    // }
    // await sleep(900000);
    console.log("WAITING >>>>", "30 s");
    await sleep(40000);
    countErr = ++countErr;

    await runAny();
  }
};

await index();
