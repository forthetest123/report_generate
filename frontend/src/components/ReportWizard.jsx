import { useState } from "react";
import ReportForm from "./reportPDF/ReportForm";
import PrefaceForm from "./reportPDF/PrefaceForm";
import SectionsForm from "./reportPDF/SectionsForm";
import SummaryForm from "./reportPDF/SummaryForm";
import BibliographyForm from "./reportPDF/BibliographyForm";

function ReportWizard({ 
    report,
    onCoverChange,
    onPrefaceChange,
    onSectionChange,
    onSummaryChange,
    onBibliographyChange,
    onPDF
}) {

    const [step, setStep] = useState(0);

    const handleNext = () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    return (
        <>
            {step === 0 && (
                <ReportForm
                    sendCover={report.cover}
                    onCoverChange={onCoverChange}
                />
            )}

            {step === 1 && (
                <PrefaceForm
                    sendPreface={report.preface}
                    onPrefaceChange={onPrefaceChange}
                />
            )}

            {step === 2 && (
                <SectionsForm
                    sendSections={report.sections}
                    onSectionChange={onSectionChange}
                />
            )}

            {step === 3 && (
                <SummaryForm
                    sendSummary={report.summary}
                    onSummaryChange={onSummaryChange}
                />
            )}

            {step === 4 && (
                <BibliographyForm
                    sendBibliography={report.bibliography}
                    onBibliographyChange={onBibliographyChange}
                />
            )}

            <div>

                {step > 0 && (
                    <button onClick={handleBack}>
                        Back
                    </button>
                )}

                {step < 4 && (
                    <button onClick={handleNext}>
                        Next
                    </button>
                )}

                {step === 4 && (
                    <button onClick={onPDF}>
                        สร้าง PDF
                    </button>
                )}

            </div>
        </>
    );
}

export default ReportWizard;