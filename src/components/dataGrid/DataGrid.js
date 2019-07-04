import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import VirtualizedTable from './VirtualizedTable';
const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

class DataGrid extends Component {
  state = {
    rows: []
  }

  onClick = () => {
    console.log("clicked");
  }

  createData = (id, dessert, calories, fat, carbs, protein) => {
    return { id, dessert, calories, fat, carbs, protein };
  }

  componentDidMount() {
    const rows = [];
    for (let i = 0; i < 10; i += 1) {
      const randomSelection = sample[i];
      rows.push(this.createData(i, ...randomSelection));
    }

    this.setState({ rows: rows });
  }

  onKeyDown = (e, rowIndex, columnIndex, totalColumns) => {

    if (e.key === 'Enter') {
      e.preventDefault();
      var event = new KeyboardEvent("keydown", {key: 'Tab',keyCode:9,bubbles: true});
   //   if (keyEvt.initKeyEvent) {
        console.log(event.code);
  //      keyEvt.initKeyEvent("keypress", true, true, null, false, false, false, false, 9, 0);
        e.nativeEvent.target.dispatchEvent(event);
   //     event.stopPropagation();
    //  } else if (keyEvt.initKeyboardEvent) {
        // Safari?
     // }

    }
    else if (e.key === 'Tab') {
      console.log(e.keyCode);
      this.setState((prevState) => {
        if (rowIndex === this.state.rows.length - 1 && columnIndex === totalColumns - 1) {
          console.log("Here");
          let { rows } = prevState;
          rows.push(
            this.createData(rowIndex, 'Frozen yoghurt', 159, 6.0, 24, 4.0)
          );

          return { rows: rows }
        }
      })
    }
  }

  render() {
    return (
      <Paper style={{ height: 300, width: '100%' }}>
        <VirtualizedTable
          rowCount={this.state.rows.length}
          rowGetter={({ index }) => this.state.rows[index]}
          onKeyDown={this.onKeyDown}
          //  onKeyDown={this.onKeyDown} <!-- If this attribute is present A new row will be added on tabbing out from the last column on the last row in the table
          columns={[
            {
              //width:300 <!--if Width property is set then this will be used to set the column widht if not then column width with be screenWidth/columnCount -->
              label: 'Dessert',
              dataKey: 'dessert',
            },
            {
              label: 'Calories\u00A0(g)',
              dataKey: 'calories',
            },
            {
              label: 'Fat\u00A0(g)',
              dataKey: 'fat',
            },
            {
              label: 'Carbs\u00A0(g)',
              dataKey: 'carbs',
            },
            {
              label: 'Protein\u00A0(g)',
              dataKey: 'protein',
            },
          ]}
        />
      </Paper>
    );
  }
}

export default DataGrid;