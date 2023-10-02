//file system
//synchronous way to read a file-->it will block the execution of other code until the file reading operation is complete.
const {readFileSync,writeFileSync,readFile,writeFile}=require("fs");
// const first=readFileSync('./content/first.txt','utf8'); //utf i.e. encoding  is optional.
// const second=readFileSync('./content/second.txt','utf8');
// console.log(first,second);

// writeFileSync('./content/result.txt',`Here is the text to be written: ${first} and ${second}`,{flat:'a'}); 
// Here flag:a is written so that node will append the content to be written in that particular file.


//asynchronous way to read a file --> It doesnot block the execution of other code while reading the file , making it suitable for non-blocking ,event-driven applications.
//When file is read, the callback function is invoked with an error(if any occured) and the file's contents.File's contents is handled in callback.
readFile('./content/first.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=data;
    readFile('./content/second.txt','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=data;
        writeFile('./content/result-async.txt',`Here is the content to be written: ${first} and ${second}`,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        });
    });
});

