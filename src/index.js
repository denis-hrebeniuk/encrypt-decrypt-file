const { program } = require("commander"); // Import commander package for building cli
const fs = require("fs"); // File System to work with file
const cryptoJs = require("crypto-js"); // JavaScript library of crypto standards.

program
  .requiredOption("--encrypt-file <file>", "Path to file") // Path to file
  .requiredOption("--encrypt-secret-key <secret key>", "Encrypt secret key")
  .requiredOption("--encrypt-output-file <file>", "Path to output file") // Path to ouput file, that we will encrypt
  .option("--encrypt", "Encrypt file or decrypt") // Encrypt file or decrypt
  .parse();

const options = program.opts(); // Get cli options

if (Object.keys(options).length >= 3) { // If objects in array are 3
  if (options.encrypt) {
    const pathFileToEncrypt = options.encryptFile;
    const encryptionSecretKey = options.encryptSecretKey;
    const pathOutputFile = options.encryptOutputFile;

    fs.readFile(pathFileToEncrypt, (error, data) => {
      if (error) {
        return console.log(`[Encrypt File] ${error}`);
      }

      let encryptedData = cryptoJs.AES.encrypt(
        data.toString(),
        encryptionSecretKey
      ); // Encrypt data of file to AES

      fs.writeFile(pathOutputFile, encryptedData.toString(), (error) => {
        if (error) {
          return console.log(`[Encrypt File] ${error}`);
        }

        console.log(
          `[Encrypt File] Successfully wrote! Output: ${pathOutputFile}`
        );
      });
    });
  } else {
    const pathFileToDecrypt = options.encryptFile;
    const encryptionSecretKey = options.encryptSecretKey;
    const pathOutputFile = options.encryptOutputFile;

    fs.readFile(pathFileToDecrypt, (error, data) => {
      if (error) {
        return console.log(`[Decrypt File] ${error}`);
      }

      let decryptedData = cryptoJs.AES.decrypt(
        data.toString(),
        encryptionSecretKey
      ); // Decrypt data of file
      decryptedData = decryptedData.toString(cryptoJs.enc.Utf8);

      fs.writeFile(pathOutputFile, decryptedData.toString(), (error) => {
        if (error) {
          return console.log(`[Decrypt File] ${error}`);
        }

        console.log(
          `[Decrypt File] Successfully wrote! Output: ${pathOutputFile}`
        );
      });
    });
  }
} else {
  return program.help();
}
