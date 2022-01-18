// importing fs module
const fs = require("fs");
// importing path module
const path = require("path");

let inputArr = process.argv.slice(2); // input which stores argument from command line after `node fo.js ______`

let types = {
  media: ["mp4", "mp3", "jpg", "jpeg", "png", "gif"],
  archives: ["zip", "rar", "7z"],
  documents: ["doc", "docx", "pdf", "csv", "txt"],
  app: ["exe", "msi", "apk", "dmg"],
};

let command = inputArr[0]; // tree or organise or help

switch (command) {
  case "tree":
    console.log("Tree Implemented");
    break;
  case "organise":
    organizeFn(inputArr[1]); // inputArr[1] is the path
    break;
  case "help":
    helpfn();
    break;
  default:
    console.log("Invalid input");
}

function helpfn() {
  console.log(`
  List of all the commands for use in this program:
  
    1) tree : To display the directory structure of the current directory
    
    node fo.js tree <path>

    2) organise : To organise the files in the current directory
    
    node fo.js organise <path>

    3) help : To display the list of all the commands
    
    node fo.js help
    `);
}
// we are writing this function to organise the files
function organizeFn(dirpath) {
  // input of a directory Path
  let destPath;

  if (dirpath == undefined) {
    console.log("Please Enter a valid Directory Path");
    //check whether dirpath is passed or not
    return;
  } else {
    let doesExist = fs.existsSync(dirpath);
    // this will tell whether the dirpath exsists or not
    if (doesExist == true) {
      destPath = path.join(dirpath, "organized_files");
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath); // we will only create a folder if it does not already exists
      } else {
        console.log("The folder : " + destPath + " ...already exists");
      }
    } else {
      console.log("Please Enter a valid Path");
    }
  }
  organizeHelper(dirpath, destPath);
}

// we are writing this function to categorize our files
function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src); // get all the files and folders inside your src
  //console.log(childNames)

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]); // path is identified for the files
    let isFile = fs.lstatSync(childAddress).isFile(); // we check here to identify only the files
    //console.log(childAddress + "  " + isFile)

    if (isFile == true) {
      let fileCategory = getCategory(childNames[i]);
      console.log(childNames[i] + "  belongs to  " + fileCategory);
      sendFiles(childAddress, dest, fileCategory);
    }
  }
}

function getCategory(name) {
  let ext = path.extname(name);
  ext = ext.slice(1); // we will take out the extension names of the files
  //console.log(ext)
  for (let type in types) {
    let cTypeArr = types[type];
    //console.log(cTypeArr)
    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i])
        // we matched the extensions with the values presnet in ctypeArr
        return type;
    }
  }
  return "others";
}

function sendFiles(srcFilePath, dest, fileCategory) {
  let categoryPath = path.join(dest, fileCategory);
  if (fs.existsSync(categoryPath) == false) {
    fs.mkdirSync(categoryPath);
  }

  let fileName = path.basename(srcFilePath); // we will get the file name
  let destFilePath = path.join(categoryPath, fileName); // we will get the destination path
  fs.copyFileSync(srcFilePath, destFilePath); // we will copy the file to the destination path
  fs.unlinkSync(srcFilePath); // we will delete the file from the source path
  console.log(fileName + " copied to " + categoryPath);
}
