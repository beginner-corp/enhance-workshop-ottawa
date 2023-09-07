export const Link = {
  "id": "Link",
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "minLength": 1,
    },
    "url": {
      "type": "string",
      "format": "url",
    },
    "published": {
      "type": "boolean",
    },
    "key": {
      "type": "string"
    }
  },
  "required":["text", "url"],
}