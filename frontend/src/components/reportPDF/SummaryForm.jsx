function SummaryForm({
    sendSummary,
    onSummaryChange
}) {

    return (
        <div>

            <h2>สรุป</h2>

            <textarea
                value={sendSummary}
                onChange={(event) =>
                    onSummaryChange(
                        event.target.value
                    )
                }
                placeholder="กรอกเนื้อหาสรุป"
                rows="12"
            />

        </div>
    );
}

export default SummaryForm;