import React, { Component } from "react";
import moment from "moment";
import styled from 'styled-components';

const Wrapper= styled.div`
    margin: 25px 0;

    table{
        margin: 0 auto;
        padding:5px;
        border: 1px solid #01579b;
        background:#fff;
    }
    table td,th{
        padding:5px;
    }
`

export class Calendar extends Component {
  state = {
    dateObject: moment()
  };
  //gets the string of weekdays in short format
  weekDaysShort = moment.weekdaysShort();
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };
  render() {
    let weekDaysShortName = this.weekDaysShort.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    //blank spaces before the 1st of the month
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    //td with the amount of days in the month
    let daysInMonth = [];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className="calendar-day">
          {d}
        </td>
      );
    }
    //total days and blank slots
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) {
        // when end loop we add remain date
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <Wrapper>
        <table className="calendar-day">
          <thead>
            <tr>{weekDaysShortName}</tr>
          </thead>
          <tbody>{daysinmonth}</tbody>
        </table>
      </Wrapper>
    );
  }
}

export default Calendar;
