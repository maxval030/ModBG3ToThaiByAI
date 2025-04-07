import { DOS2TranslateClient } from "./connectDB";
export const findTranslateCollection = async () => {
    const client = (await DOS2TranslateClient()).collection("bg3TranslateVer2")
    const result = await client.find().toArray()
    
    return result
}