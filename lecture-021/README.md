# Lecture 21 | Web Scraping and Excel Data Extraction

## JSON `JavaScript Object Notation`

- [JSON](https://en.wikipedia.org/wiki/JSON)
- JavaScript Object Notation, just like JavaScript Objects
- Stores data in a key value pair format

## JSON Data

```json
{
  "name": "Milind Mishra",
  "age": 23,
  "height": "5'11",
  "weight": "85kgs",
  "isAvenger": false,
  "isCaptain": false,
  "address": {
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India"
  }
}
```

> The following example shows a possible JSON representation describing a person.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
```

## `JSON` things to know

- JSON is a text format
- **JSON** is an acronym for `JavaScript Object Notation`
- in JSON, the keys are always strings enclosed in "double quotes", and not enclosed in single quotes
- in JSON we cant have comments
- both key value pairs are enclosed in curly braces, and itself in double quotes
- for a boolean value in JSON, we use true or false without quotes
- for a null value in JSON, we use null without quotes
- after last property we do not need a comma
- if a comma is given after a property JSON expects another property after it
- to keep multiple objects in a single JSON file, we use an **array**

```json
[
  {
    "name": "Milind Mishra",
    "age": 23,
    "height": "5'11",
    "weight": "85kgs",
    "isAvenger": true,
    "isCaptain": false,
    "address": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    }
  },
  {
    "name": "Rajesh Sharma",
    "age": 25,
    "height": "5'10",
    "weight": "80kgs",
    "isAvenger": true,
    "isCaptain": false,
    "address": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    }
  }
]
```

- A _good coding practice_ while making multiple object JSON while using an array and not change the sequence of key value pairs

## API _Application Programming Interface_

- This simple JSON that we created can be called a small API
- It is a way to communicate with other programs
- It can be used to fetch details here in this case we are using it to fetch details of a `person`
- JSON API [examples](https://jsonapi.org/examples/)

> `funWithJson.js`

```js
const log = console.log;
const fs = require("fs");

// whenever a file is read it gets read as a buffer data
let buffer = fs.readFileSync("example.json");
log(buffer);
// to parse the buffer we need to convert it to a string
let json = buffer.toString();
log(json);
```

> Output :

```bash
> node funWithJson.js
<Buffer 5b 0a 20 20 7b 0a 20 20 20 20 22 6e 61 6d 65 22 3a 20 22 4d 69 6c 69 6e 64 20 4d 69 73 68 72 61 22 2c 0a 20 20 20 20 22 61 67 65 22 3a 20 32 33 2c 0a ... 449 more bytes>
[
  {
    "name": "Milind Mishra",
    "age": 23,
    "height": "5'11",
    "weight": "85kgs",
    "isAvenger": true,
    "isCaptain": false,
    "address": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    }
  },
  {
    "name": "Rajesh Sharma",
    "age": 25,
    "height": "5'10",
    "weight": "80kgs",
    "isAvenger": true,
    "isCaptain": false,
    "address": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    }
  }
]
```

> Manupilating an JSON file using the fs module

```js
const log = console.log;
const fs = require("fs");

// whenever a file is read it gets read as a buffer data
let buffer = fs.readFileSync("example.json");
// log(buffer);
// to parse the buffer we need to convert it to a string
// let data = buffer.toString();
// to parse JSON we use the JSON.parse() method
let data = JSON.parse(buffer);
// log(data);

// since data is now an array of objects we can manupulate it using array methords

data.push({
  name: "Manish Malhotra",
  age: "28",
  height: "5.8",
  weight: "65",
  isAvenger: true,
  isCaptain: false,
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
});

log(data);

// to convert the data back to a buffer we use the JSON.stringify() method
let stringData = JSON.stringify(data);
log(stringData);

// the purpose to stringify was to use fs.writeFileSync() since fs.writeFileSync() only accepts strings
fs.writeFileSync("example.json", stringData);
log("File written successfully");
```

> Output :

```bash
> node funWithJson.js
[
  {
    name: 'Milind Mishra',
    age: 23,
    height: "5'11",
    weight: '85kgs',
    isAvenger: true,
    isCaptain: false,
    address: { city: 'Bangalore', state: 'Karnataka', country: 'India' }
  },
  {
    name: 'Rajesh Sharma',
    age: 25,
    height: "5'10",
    weight: '80kgs',
    isAvenger: true,
    isCaptain: false,
    address: { city: 'Bangalore', state: 'Karnataka', country: 'India' }
  },
  {
    name: 'Manish Malhotra',
    age: '28',
    height: '5.8',
    weight: '65',
    isAvenger: true,
    isCaptain: false,
    address: { city: 'Bangalore', state: 'Karnataka', country: 'India' }
  }
]
[{"name":"Milind Mishra","age":23,"height":"5'11","weight":"85kgs","isAvenger":true,"isCaptain":false,"address":{"city":"Bangalore","state":"Karnataka","country":"India"}},{"name":"Rajesh Sharma","age":25,"height":"5'10","weight":"80kgs","isAvenger":true,"isCaptain":false,"address":{"city":"Bangalore","state":"Karnataka","country":"India"}},{"name":"Manish Malhotra","age":"28","height":"5.8","weight":"65","isAvenger":true,"isCaptain":false,"address":{"city":"Bangalore","state":"Karnataka","country":"India"}}]
File written successfully
```

## Alternatively without using fs module use `const jsonFile = require("./example.json");`

```js
// all the buffer data conversion to string and all strings conversion to JSON is now not required
const jsonFile = require("./example.json");
// all data is now an array of objects stored in jsonFile variable

const log = console.log;

jsonFile.push({
  name: "Manish Malhotra",
  age: "28",
  height: "5.8",
  weight: "65",
  isAvenger: true,
  isCaptain: false,
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
});

log(jsonFile);
```

## Working with Excel files

- Install xlsx library using `npm install xlsx`

```js
const log = console.log;
const fs = require("fs");
const xlsx = require("xlsx");

// all the buffer data conversion to string and all strings conversion to JSON is now not required
const jsonFile = require("./example.json");
// all data is now an array of objects stored in jsonFile variable

// whenever a file is read it gets read as a buffer data
let buffer = fs.readFileSync("example.json");
// log(buffer);
// to parse the buffer we need to convert it to a string
// let data = buffer.toString();
// to parse JSON we use the JSON.parse() method
let data = JSON.parse(buffer);
// log(data);

// since data is now an array of objects we can manupulate it using array methords

data.push({
  name: "Manish Malhotra",
  age: "28",
  height: "5.8",
  weight: "65",
  isAvenger: true,
  isCaptain: false,
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
});

log(data);

// to convert the data back to a buffer we use the JSON.stringify() method
let stringData = JSON.stringify(data);
log(stringData);

// the purpose to stringify was to use fs.writeFileSync() since fs.writeFileSync() only accepts strings
fs.writeFileSync("example.json", stringData);
log("File written successfully");

// flow : workbook -> worksheet (convert into rows and cols) expects a JSON data -> excel file

// writing to excel file

let newWB = xlsx.utils.book_new(); // create a new workbook file

let newWS = xlsx.utils.json_to_sheet(jsonFile); // convert the json data to a worksheet (sheet format)
xlsx.utils.book_append_sheet(newWB, newWS, "persons"); // append the worksheet to the workbook
xlsx.writeFile(newWB, "file.xlsx"); // write the workbook to a file
```

![Screenshot 2022-02-10 at 10 47 44 PM](https://user-images.githubusercontent.com/28717686/153461036-98c8ecb8-1ab6-4107-95de-c0ce83ca1627.png)

```js
// reading the excel file

let wb = xlsx.readFile("./file.xlsx"); // read the file
let excelData = wb.Sheets["persons"]; // get the sheet
let ans = xlsx.utils.sheet_to_json(excelData); // convert the sheet to json
console.log(ans); // print the json data
```
![Screenshot 2022-02-10 at 10 51 18 PM](https://user-images.githubusercontent.com/28717686/153461813-20fa78e6-366e-43ff-a13a-905b53b3637d.png)

