const fs = require('fs');

const writeFile = async (path, content) => {
await new Promise((resolve) => setTimeout(resolve,100));
const data = await fs.promises.writeFile(path, content, { encoding: 'utf-8' });
return data;
};
const operation = async (x) => {
for(let i=0;i<x;i++) {
const result = Math.pow(i,2);
}
};
const run = async() => {
const content = 'hello ji';
await writeFile('a.txt', content);
console.log('File written successfully');
await operation(10000000000);
console.log('Done writing file and performing expensive operation.')
};
run();
