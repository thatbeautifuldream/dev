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
