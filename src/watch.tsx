import * as React from 'react';
import {render} from 'react-dom';

export class Watch extends React.Component<{}, {}> {
  private time: string;
  private date: string;

  updateTime() {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const cd = new Date();
    this.time =
      this.zeroPadding(cd.getHours(), 2) +
      ':' +
      this.zeroPadding(cd.getMinutes(), 2) +
      ':' +
      this.zeroPadding(cd.getSeconds(), 2);
    this.date =
      this.zeroPadding(cd.getFullYear(), 4) +
      '-' +
      this.zeroPadding(cd.getMonth() + 1, 2) +
      '-' +
      this.zeroPadding(cd.getDate(), 2) +
      ' ' +
      week[cd.getDay()];
  }

  zeroPadding(num: any, digit: any) {
    let zero: string = '';
    for (var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  render() {
    const self = this;
    setInterval(() => {
      self.updateTime();
      self.forceUpdate();
    }, 1000);
    this.updateTime();
    return (
      <div id="clock">
        <p className="date">{this.date}</p>
        <p className="time">{this.time}</p>
      </div>
    );
  }
}
