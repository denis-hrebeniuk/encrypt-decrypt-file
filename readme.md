# Encryption/Decryption file

## About

This project is a simple file encryptor/decryptor.

## Installation

- Install [**Node.js**](https://nodejs.org/) 15.14.0 or newer
- Download repository or clone
- Install npm dependencies
```
npm install
```

## Usage

To encrypt file you just need to specify file, encryption password, output file. Use `node . --help` to get all options.

> Encryption example
```
node . --encrypt-file "example.txt" --encrypt-secret-key readme --encrypt-output-file "output.txt" --encrypt
```

> Decryption example
```
node . --encrypt-file "example.txt" --encrypt-secret-key readme --encrypt-output-file "output.txt"
```