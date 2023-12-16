const fs = require('fs');

const readFile = async (path) => {
  await new Promise((resolve) => setTimeout(resolve,100));
   const data = await fs.promises.readFile(path, { encoding: 'utf-8' });
  return data;
};
const operation = async (x) => {
  for(let i=0;i<x;i++) {
      const result = Math.pow(i,2);
  }
};
const run = async() => {
      const content = await readFile('a.txt');
      console.log(`File Content: ${content}`);
      await operation(10000000000);
      console.log('Done reading file and performing expensive operation.')
};
run();