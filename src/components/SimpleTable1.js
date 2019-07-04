 
 import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const data = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
];

class SimpleTable1 extends Component {

 render() {
    return (
      <div style={{ overflow: "auto" }} >
      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#f5f5f5",
              height: "35px"
            }}
          >
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
            <TableCell>Column 5</TableCell>
            <TableCell>Column 6</TableCell>
            <TableCell>Column 7</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        </Table>
      <div style={{ overflow: 'auto', height: '150px' }}>
        <Table style={{tableLayout: 'fixed'}}>
          <TableBody>
            {data.map((n, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{n}</TableCell>
                  <TableCell>{n}</TableCell>
                  <TableCell>{n}</TableCell>
                  <TableCell>{n}</TableCell>
                  <TableCell>{n}</TableCell>
                  <TableCell>{n}</TableCell>
                  <TableCell>{n}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </div>
      </div>
    );
  }
}

export default SimpleTable1;