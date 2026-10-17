
import { useState } from "react";
import ReportForm from "./reportPDF/ReportForm";
import PrefaceForm from "./reportPDF/PrefaceForm";
import SectionsForm from "./reportPDF/SectionsForm";
import SummaryForm from "./reportPDF/SummaryForm";
import BibliographyForm from "./reportPDF/BibliographyForm";

const pages = [
    "ปก",
    "คำนำ",
    "เนื้อหา",
    "สรุป",
    "บรรณานุกรม"
];

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
        setStep(prev => Math.min(prev + 1, pages.length - 1));
    };

    const handleBack = () => {
        setStep(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="report-wizard">

            {/* เมนูข้ามหน้า */}
            <nav className="wizard-navigation" aria-label="ขั้นตอนการสร้างรายงาน">
                {pages.map((page, index) => (
                    <button
                        key={page}
                        type="button"
                        className={`wizard-nav-button ${
                            step === index ? "active" : ""
                        }`}
                        aria-current={step === index ? "step" : undefined}
                        onClick={() => setStep(index)}
                    >
                        {index + 1}. {page}
                    </button>
                ))}
            </nav>

            {/* เนื้อหาแต่ละหน้า */}
            <div className="wizard-content">
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
            </div>

            {/* แถบควบคุม */}
            <div className="wizard-buttons">
                {step > 0 ? (
                    <button
                        className="wizard-button wizard-button-back"
                        type="button"
                        onClick={handleBack}
                    >
                        ← ย้อนกลับ
                    </button>
                ) : (
                    <div />
                )}

                <button
                    className="wizard-button wizard-button-preview"
                    type="button"
                    onClick={onPDF}
                >
                    ดูตัวอย่าง PDF
                </button>

                {step < pages.length - 1 ? (
                    <button
                        className="wizard-button wizard-button-next"
                        type="button"
                        onClick={handleNext}
                    >
                        ถัดไป →
                    </button>
                ) : (
                    <button
                        className="wizard-button wizard-button-next"
                        type="button"
                        onClick={onPDF}
                    >
                        สร้าง PDF
                    </button>
                )}
            </div>
        </div>
    );
}

export default ReportWizard;
