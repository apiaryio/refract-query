# Refract Query

## Usage

```JavaScript
import query from 'refract-query';

const element = {
  "element": "parseResult",
  "meta": {},
  "attributes": {},
  "content": [
    {
      "element": "category",
      "meta": {
        "classes": [
          "api"
        ]
      },
      "attributes": {},
      "content": [
  (...)
};

// Returns all HTTP Request elements
const results = query(element, {element: 'httpRequest'});
```

## Examples

### Get all HTTP Responses elements

```JavaScript
const results = query([Refract Element], {element: 'httpResponses'});
```

### Get all HTTP Responses elements

```JavaScript
const results = query([Refract Element], {element: 'httpResponses'});
```

### Get all Resource Groups

```
const results = query([Refract Element], {
  "element": "category",
  "meta": {
    "classes": [
      "resourceGroup",
    ],
  },
});
```
