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
  "isAvenger": true,
  "isCaptain": false,
  "address": {
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India"
  }
}
```

## Notes

- JSON is a text format
- **JSON** is an acronym for `JavaScript Object Notation`
- in JSON, the keys are always strings enclosed in "double quotes", and not enclosed in single quotes
- in JSON we cant have comments
- both key value pairs are enclosed in curly braces, and itself in double quotes
- for a boolean value in JSON, we use true or false without quotes
- for a null value in JSON, we use null without quotes
- after last property we do not need a comma
- if a comma is given after a property JSON expects another property after it
