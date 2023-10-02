const path=require("path");
//join
const filePath=path.join("/content","subfolder","text.txt");
console.log(filePath);

//basename
console.log(path.basename(filePath));

//resolve

console.log(path.resolve(__dirname,"content","subfolder","text.txt"));
