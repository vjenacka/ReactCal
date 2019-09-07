import React, { Component } from "react";
import moment from "moment";

export class Calendar extends Component {
  weekDaysShort = moment.weekdaysShort();
  render() {
    let weekDaysShortName = this.weekDaysShort.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    return (
      <table>
        <thead>
            <tr>{weekDaysShortName}</tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}

export default Calendar;
