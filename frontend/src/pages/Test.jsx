import { useState , useEffect } from "react";
import useFetch from "../hook/useFetch";
import downloadReport from "../services/downloadReport";
import PDFReport from "../services/PDFReport";

function Test(){
    
    // const [data , error] = useFetch();

      const handleDownload = async () => {
        try {
        const blob = await downloadReport();
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "report.docx";
        a.click();

        URL.revokeObjectURL(url);
        } catch (error) {
        console.error(error);
        }
    };

    const handlePDF = async () => {
        try {
        const blob = await PDFReport();
        const url = URL.createObjectURL(blob);

        window.open(url, "_blank");
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <>

            <button onClick={handleDownload}>
                Download Report
            </button>      

            <button onClick={handlePDF}>
                SHOW PDF
            </button>
            {/* {error && <p>{error}</p>}
            {data && (
                <>
                    <h1>{data.message}</h1>
                    <h1>{data.data.title    }</h1>
                </>
            )} */}
        </>
    );
}

export default Test;