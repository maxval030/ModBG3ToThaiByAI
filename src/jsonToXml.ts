import { toXML } from "jstoxml";

import dosJson from './BG3localizeEng/DOS2Transalte.bg3TranslateVer2.json'
import { isEmpty } from "radash";
// import {IsEmpty} from 'radash'
const jsonIsArray = dosJson as any[];

const a = toXML({
  contentList: () => {
    return jsonIsArray.map((val) => {
        return {
            _name: "content",
            _attrs: {
              contentuid: val.content.contentuid,
              version: val.content.version
            },
            _content: isEmpty(val?.content?.thai) ?`${val.content.content}` : `${val.content.content}(${val.content.thai})`
          }
    })
   
  },
},  {
  header: true,
  indent: '  '
});
// const a = toXML({
//   contentList: () => {
//     return dosJson.map((val) => {
//         return {
//             _name: "content",
//             _attrs: {
//               contentuid: val.content.contentuid,
//             },
//             _content: !val?.content?.thaiContent ?`${val.content.content}` : `${val.content.content}(${val.content.thaiContent})`
//           }
//     })
   
//   } 
// });

// const a = toXML({
//     contentList: {
//       _name: "content",
//       _attrs: {
//         contentuid: "contentuid",
//       },
//       _content: "testF"
//     },
//   });

Bun.write("./src/fileTranslateXML/english.loca.xml", a)
