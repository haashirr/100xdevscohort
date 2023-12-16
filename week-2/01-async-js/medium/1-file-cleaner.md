const fs = require('fs/promises');

const cleanFileContent = async (path) => {
  try {
    const content = await fs.readFile(path, { encoding: 'utf-8' });
    const cleanedContent = content.replace(/\s+/g, ' '); 
    await fs.writeFile(path, cleanedContent, { encoding: 'utf-8' });
    console.log(`File content cleaned and updated successfully.`);
  } catch (error) {
    console.error(error);
  }
};

cleanFileContent('a.txt');
