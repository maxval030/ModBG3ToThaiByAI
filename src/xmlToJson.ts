const fs = require("fs");
const { convertXML } = require("simple-xml-to-json");



// const xml = fs.readFileSync("english.loca.xml", "utf8");
// const xml = fs.readFileSync("engBG3.xml", "utf8");

const xml =await Bun.file("./BG3localizeEng/english.loca.xml").text();


const r = convertXML(xml);

Bun.write("englishBG3.json", JSON.stringify(r));


// const fs = require("fs");
// const { convertXML } = require("simple-xml-to-json");

// const a = fs.readFileSync("BG3localizeEng/english.loca.xml", "utf8");
// console.log(a)
// const r = convertXML(a);

// fs.writeFileSync("english.json", JSON.stringify(r), "utf8");
