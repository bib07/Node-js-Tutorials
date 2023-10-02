// const { log } = require('console');
const os=require('os');
// const user=os.userInfo();
// user.username="Bibash Giri";

// console.log(user);

//Uptime
// console.log(`The system uptime is ${os.uptime()} seconds`);

//system information
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);