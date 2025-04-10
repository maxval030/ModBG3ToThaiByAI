const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("node:fs");
//   const mime = require("mime-types");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction:
   "You're the expertise interpreter English to Thai is super elegant, if you cannot Translate I will die please help me, Translate English to thai all charter, avoid translating Character names or terminology but return original name, do not explain, return only value,if in value have number return number is Western Digits, Thai is in the environment Thai Middle Ages.Imagine three different experts are translate this word. All experts will write down 1 step of their thinking, then share it with the group. Then all experts will go on to the next step, etc. If any expert realises they're wrong at any point then they leave., forbidden to show Expert,Show only you're thing best of best 1 result, show result only. NOT SHOW YOU ARE THING in result.",
});

const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: "text/plain",
};

export async function translateByAi(text: string): Promise<string> {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(text);
  // TODO: Following code needs to be updated for client-side apps.
  // const candidates = result.response.candidates;
  // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
  //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
  //     const part = candidates[candidate_index].content.parts[part_index];
  //     if(part.inlineData) {
  //       try {
  //         // const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
  //         // fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
  //         console.log(`Output written to: ${part.inlineData.mimeType.translate}`);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   }
  // }
  // const translatedText = JSON.parse(result.response.text()).translate
  const translatedText = result.response.text();

  return translatedText;
}

// run();
