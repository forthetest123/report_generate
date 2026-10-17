function SummaryForm({
    sendSummary,
    onSummaryChange
}) {

    return (
        <form className="form-card">

            <div className="page-header">
                <h2>สรุป</h2>
                <p>เขียนสรุปเนื้อหาสำคัญของรายงาน</p>
            </div>

            <div className="form-group">

                <label htmlFor="summary">
                    เนื้อหาสรุป
                </label>

                <textarea
                    id="summary"
                    className="form-input summary-textarea"
                    value={sendSummary}
                    onChange={(event) =>
                        onSummaryChange(event.target.value)
                    }
                    placeholder="กรอกเนื้อหาสรุป"
                />

            </div>

        </form>
    );
}

export default SummaryForm;