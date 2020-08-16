# Ngx Stacked Progressbar

[![npm version](https://img.shields.io/npm/v/ngx-stacked-progressbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-stacked-progressbar)


<img src="https://raw.githubusercontent.com/dailam103/ngx-stacked-progressbar/HEAD/assets/demo.png" alt="Example" width="700"/>

## How to use it?
Install `ngx-stacked-progressbar` in your project:
```
npm install ngx-stacked-progressbar
```

Import the `NgxStackedProgressbarModule` in your `app.module.ts`:
```typescript
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-stacked-progressbar';

@NgModule({
  imports: [
    NgxStackedProgressbarModule,
  ],
})
export class AppModule {}
```

Define data in your app.component.ts:
```typescript
import { StackedProgressbarBlock } from 'ngx-stacked-progressbar/lib/ngx-stacked-progressbar.type';

...

export class AppComponent {
  public data: StackedProgressbarBlock[] = [
    {
      displayValue: 'Free Space',
      value: 40,
      tooltip: 'Free Space',
      bgColor:'#5cb85c'
    },
    {
      displayValue: 'Warning',
      value: 20,
      tooltip: 'Warning',
      bgColor: '#f0ad4e'
    },
    {
      displayValue: 'Danger',
      value: 20,
      tooltip: 'Danger',
      bgColor: '#d9534f'
    }
  ];

  ...

```


Use the `ngx-stacked-progressbar` component:
```html
<ngx-stacked-progressbar [data]="data" width="700px" height="20px">
</ngx-stacked-progressbar>
```

#### Inputs
```typescript
  @Input() fontSize = '12px';
  @Input() width = '100%';
  @Input() height = '24px';
  @Input() color = 'white';
  @Input() public data: StackedProgressbarBlock[] = [];
```

