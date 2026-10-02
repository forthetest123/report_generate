import { useState , useCallback } from "react";
import ReportWizard from "../components/ReportWizard";
import PDFReport from "../services/PDFReport";

import "../styles/report.css"

function Test() {

    const [report, setReport] = useState({
        cover: {
            title: "",
            teacher: "",
            student: "",
            class: "",
            subject: "",
            semester: "",
            year: "",
            college: ""
        },

        preface: "",

        sections: [],

        summary: "",

        bibliography: []
    });

    const handleCoverChange = useCallback((cover) => {
        setReport(prev => ({
            ...prev,
            cover: cover
        }));
    },[]);

    const handlePrefaceChange = (preface) => {
        setReport(prev => ({
            ...prev,
            preface: preface
        }));
    };

    const handleSectionsChange = (sections) => {
        setReport(prev => ({
            ...prev,
            sections: sections
        }));
    };

    const handleSummaryChange = (summary) => {
        setReport(prev => ({
            ...prev,
            summary: summary
        }));
    };

    const handleBibliographyChange = (bibliography)=>{
        setReport(prev => ({
            ...prev,
            bibliography:bibliography
        }))
    }

    const handlePDF = async () => {
        try {

            const blob = await PDFReport(report);

            const url = URL.createObjectURL(blob);

            window.open(url, "_blank");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="app">
            <h1 className="app-title">ระบบสร้างรายงาน</h1>

            <ReportWizard
                report={report}
                onCoverChange={handleCoverChange}
                onPrefaceChange={handlePrefaceChange}
                onSectionChange={handleSectionsChange}
                onSummaryChange={handleSummaryChange}
                onBibliographyChange={handleBibliographyChange}
                onPDF={handlePDF}
            />
        </div>
    );
}

export default Test;