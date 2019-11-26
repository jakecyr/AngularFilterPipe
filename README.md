# Angular Filter Pipe
Simple Angular filter pipe that can be used like the "filter" pipe from AngularJS.

## Installation
1. Add the `filter.pipe.ts` file to your project
2. Add the `FilterPipe` to your module declarations array

## Example Usage
### HTML:
```html
<tr *ngFor="let program of programs | filter: filters">
  ...
```
### Filters Object:
```javascript
filters = {
  '*': '',
  'column_1': ''
}
```
