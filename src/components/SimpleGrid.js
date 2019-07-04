import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ColumnSizer, MultiGrid, AutoSizer } from 'react-virtualized';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';

const STYLE = {
    border: '1px solid #ddd',
};
const STYLE_BOTTOM_LEFT_GRID = {
    borderRight: '2px solid #aaa',
    backgroundColor: '#f7f7f7',
};
const STYLE_TOP_LEFT_GRID = {
    borderBottom: '2px solid #aaa',
    borderRight: '2px solid #aaa',
    fontWeight: 'bold',
    height: '300px'
};
const STYLE_TOP_RIGHT_GRID = {
    borderBottom: '2px solid #aaa',
    fontWeight: 'bold',

};
class SimpleGrid extends Component {


    render() {
        let componentHeight = 300;
        return (
            <Paper style={{ height: componentHeight, width: '100%' }}>
                <AutoSizer>
                    {({ height, width }) => {
                        console.log(height + "," + width);
                        let numColumns = 10;
                        let someCalculatedWidth = width;
                        let someCalculatedHeight = componentHeight;
                        let numRows = 10;
                        return (<ColumnSizer
                            columnMaxWidth={someCalculatedWidth / numColumns}
                            columnMinWidth={(someCalculatedWidth / numColumns) - 100}
                            columnCount={numColumns}
                            width={someCalculatedWidth}
                        >
                            {({ adjustedWidth, getColumnWidth, registerChild }) => (
                                <MultiGrid
                                    ref={registerChild}
                                    fixedRowCount={1}
                                    enableFixedRowScroll={true}
                                    columnWidth={getColumnWidth}
                                    style={STYLE}
                                    styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
                                    styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
                                    styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
                                    columnCount={numColumns}
                                    height={someCalculatedHeight}
                                    cellRenderer={({ columnIndex, key, rowIndex, style }) => {
                                        //  style.display="table";

                                        return (<div
                                            //  style={{display:"inline-block",verticalAlign:"middle"}}
                                            key={key}
                                            style={{ ...style, display: "table", borderCollapse:"collapse",tableLayout:"fixed", whiteSpace:"nowrap" }}
                                        >
                                            <p style={{ padding: "10px",border:"1px", borderStyle:"solid",overflow:"hidden", whiteSpace:"nowrap",textOverflow:"ellipsis", display: "table-cell", verticalAlign: "middle", textAlign: "center" }}> Sample content for the cell{columnIndex}</p>
                                        </div>)
                                    }}
                                    rowHeight={80}
                                    rowCount={numRows}
                                    width={adjustedWidth}
                                />

                            )}
                        </ColumnSizer>);
                    }}
                </AutoSizer>
            </Paper>

        );
    }
}

export default SimpleGrid;
