import React, { ChangeEvent, useState } from "react"

const FileInputter = () => {
    const [givenFile, setGivenFile] = useState<File | null>(null)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setGivenFile(file || null);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".xlsx,.csv"></input>
            <h1>{givenFile?.name}</h1>
        </div>
    )
}

export default FileInputter