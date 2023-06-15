import React, { useState } from "react"
import FileInputter from "./FileInputter"
import SpreadsheetDisplay from "./SpreadsheetDisplay";
import * as XLSX from 'xlsx';

const FileManager = () => {
    //currentData in manager
    const [fileData, setFileData] = useState<{[key: string]: any }[]>([])

    const readFileData = (file : File) => {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setFileData((jsonData as { [key: string]: any }[]));
    };

    reader.readAsArrayBuffer(file);
    console.log(typeof(fileData))
  };    

    return (
        <div>
            <h1>File Handler here</h1>
            <FileInputter/>
            <SpreadsheetDisplay data={fileData}/>
        </div>
    )
}

export default FileManager;