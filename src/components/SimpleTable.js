import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class SimpleTable extends Component {

  state = { rows: [], curRow: 0 }

  createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  }



  useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650
    },
    textField: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      width: 200,
    }
  }));

  componentDidMount() {
    this.setState({
      rows: [
        this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
      ]
    })
  }

  renderPasswordConfirmError = (e, rowIndex) => {
    console.log(e.key);
    if (e.key === 'Tab') {
      console.log("ROw index=> " + rowIndex);
      this.setState((prevState) => {
        if (rowIndex === this.state.rows.length - 1) {
          let { rows } = prevState;
          rows.push(
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
          );

          return { rows: rows }
        }
      })
    }

  }


  selectedRow = (index) => {
    console.log("selectedRow " + index);
    if (this.state.curRow !== index) {
      this.setState({ curRow: index })
    }
  }

  render() {
    console.log("render called");
    let classes = this.useStyles;

    let rows = this.state.rows;
    let lastIndex = rows.length - 1;
    return (
      <Paper className={classes.root}>
       
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflow: 'auto', height: '150px' }}>
            {rows.map((row, index) => (
              <TableRow key={index}
                onClick={() => this.selectedRow(index)}
                selected={lastIndex === index ? true : false}>
                <TableCell>
                  <TextField
                    className={classes.textField}
                    defaultValue={row.name}
                    margin="normal" />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    className={classes.textField}
                    defaultValue={row.calories}
                    margin="normal" />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    className={classes.textField}
                    defaultValue={row.fat}
                    margin="normal" />
                </TableCell>
                <TableCell align="right"><TextField
                  className={classes.textField}
                  defaultValue={row.carbs}
                  margin="normal" />
                </TableCell>

                <TableCell align="right"><TextField
                  className={classes.textField}
                  defaultValue={row.protein}
                  margin="normal" />
                </TableCell>

                <TableCell align="right">
                  <FormControl className={classes.formControl} onKeyDown={(e) => this.renderPasswordConfirmError(e, index)}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                      value={10}

                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}



export default SimpleTable;