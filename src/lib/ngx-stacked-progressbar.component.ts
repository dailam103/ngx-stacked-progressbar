import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { StackedProgressbarBlock } from './ngx-stacked-progressbar.type';

@Component({
  selector: 'ngx-stacked-progressbar',
  templateUrl: './ngx-stacked-progressbar.html',
  styleUrls: ['./ngx-stacked-progressbar.scss']
})
export class NgxStackedProgressbarComponent implements OnInit {

  @Input() fontSize = '12px';
  @Input() width = '100%';
  @Input() height = '24px';
  @Input() color = 'white';
  @Input() public data: StackedProgressbarBlock[] = [];

  colors = [
    '#FFFFFF',
    '#009F8C',
    '#95DFD6',
    '#23AC0E',
    '#A6E39D',
    '#F6CA06',
    '#FCEDAA',
    '#DA5019',
    '#F3C0AB',
    '#C7243A',
    '#ECACB5',
    '#BF1E56',
    '#EAA8BF',
    '#A52175',
    '#D27EB3',
    '#932674',
    '#DBA6CC',
    '#744199',
    '#CCB3DD',
  ];
  totalValue = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalValue = this.data.reduce((sum, d) => sum + d.value, 0);
    this.colors = _.shuffle(this.colors);
  }

  getPercent(value: number): number {
    return 100 * value / this.totalValue;
  }

  getBgColor(index: number): string {
    if (!_.isNull(_.get(this.data, [index, 'bgColor'], null))) {
      return _.get(this.data, [index, 'bgColor']);
    }
    return this.colors[index % this.colors.length];
  }

  getDisplayValue(index: number): string {
    return _.get(this.data, [index, 'displayValue'], '');
  }

  getTooltipValue(index: number): string {
    return _.get(this.data, [index, 'tooltip'], '');
  }

  getColor(index: number): string {
    return _.get(this.data, [index, 'color'], this.color);
  }
}
