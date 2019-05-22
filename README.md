# AngularFilterPipe
Simple Angular filter pipe that can be used like the "filter" directive from AngularJS


## Example Usage
### HTML:
```
<tr *ngFor="let program of programs | filter: filters">
  ...
```
### Filters Object:
```
filters = {
  '*': '',
  'column_1': ''
}
```
