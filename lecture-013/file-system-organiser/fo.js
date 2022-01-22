// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const fs = require("fs");

const path = require("path");

let inputArr = process.argv.slice(2);

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

//[Node FO.js tree folderpath]

let command = inputArr[0];

switch (command) {
  case "tree":
    treeFn(inputArr[1]);
    break;
  case "organize":
    organizeFn(inputArr[1]);
    break;
  case "help":
    helpfn();
    break;

  default:
    console.log("PLEASE ENTER A VALID Command");
    break;
}

function helpfn() {
  console.log(`List of all the Commands-
                    1) Tree Command - node FO.js tree <dirname>
                    2) Organize Command- node FO.js organize <dirname>
                    3) Help Command - node FO.js help`);
}

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

      //   D:\Batches\FJP3 Dev\test Folder\organized_files - I want to create a folder in this path

      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath); // we will only create a folder if it does not already exists
      } else {
        console.log("This folder Already Exists");
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
      let fileCategory = getCategory(childNames[i]); //.txt
      console.log(childNames[i] + "  belongs to  " + fileCategory);
      // we took out all the category type of different files

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
  let catPath = path.join(dest, fileCategory); // here we are making file categories paths

  if (fs.existsSync(catPath) == false) {
    // checking for category folder path
    fs.mkdirSync(catPath);
  }

  let fileName = path.basename(srcFilePath); /// we took out the names of the files
  let destFilePath = path.join(catPath, fileName); // here we created a path for the files in category folders

  fs.copyFileSync(srcFilePath, destFilePath); // copied files from src to dest

  fs.unlinkSync(srcFilePath); // deleted the files from src

  console.log(fileName + "is copied to" + fileCategory);
}

function treeFn(dirpath) {
  if (dirpath == undefined) {
    console.log("Please Enter a Valid Command ");
  } else {
    let doesExist = fs.existsSync(dirpath);
    if (doesExist == true) {
      treeHelper(dirpath, " ");
    }
  }
}

function treeHelper(targetPath, indent) {
  let isFile = fs.lstatSync(targetPath).isFile();

  if (isFile == true) {
    let fileName = path.basename(targetPath);
    console.log(indent + "├──" + fileName);
  } else {
    let dirName = path.basename(targetPath);
    console.log(indent + "└──" + dirName);

    let children = fs.readdirSync(targetPath);
    //console.log(children)
    // here we took out all the children of test folder

    for (let i = 0; i < children.length; i++) {
      let childPath = path.join(targetPath, children[i]);

      //console.log(childPath)
      treeHelper(childPath, indent + "\t");
    }
  }
}
