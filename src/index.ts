import { findTranslateCollection } from './db/bg3TranslateCollection'
const index = async () => {
    const result = await findTranslateCollection()
    console.log("result>>>",result)
    return
}

index()