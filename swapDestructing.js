let watter = 'watter';
let joice = 'joice';

// temp swap------------------
const temp = 'joice';
joice = watter
watter = temp;

console.log(joice, watter);
// destructing swap-------------
 [watter,  joice] = [joice, watter]

 console.log(watter, joice);