

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const SpreadsheetDisplay = (data : {[key: string]: any }[]) => {
    return (
        <div>
            <h1>Displaying spreadsheet</h1>
            <table>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {/* {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))} */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default SpreadsheetDisplay;