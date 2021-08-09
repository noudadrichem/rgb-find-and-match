# RGB find and match

I created this utility because I needed a simple RGB matcher for [keycapsets.com](https://keycapsets.com). Consider it a work in progress! Fun fact, I developed this utility on my iPad via the [PlayJS app](https://playdotjs.com/).

## How to use
`getMatches()` can have 3 arguments and returns the matches .
| name | type     | required | default |   |
|------|----------|----------|---------|---|
| r     | RGBColor | true     |         |   |
| g     | RGBColor | true     |         |   |
| b     | RGBColor | true     |         |   |
| colors | Color[] | true     |         |   |
| range    | number | false     |     20    |   |

### For example
```ts
const colors: Color[] = [
    { r: 122, g: 97, b: 80 },
    { r: 138, g: 92, b: 107 },
    { r: 76, g: 125, b: 138 },
    { r: 79, g: 90, b: 110 },
    { r: 85, g: 144, b: 184 },
    { r: 181, g: 123, b: 36 },
    { r: 65, g: 114, b: 53 },
    { r: 68, g: 123, b: 126 },
    { r: 204, g: 96, b: 148 },
]
const matches = getMatches(163, 133, 45, colors)
```
Returns an array with the matches from the list, in this case: `[{ r: 181, g: 123, b: 36 }]`

## Contribute
Feel free to leave feedback inside the issues or contribute via a PR!

## Todos
- Filter out to many gray scaled colors