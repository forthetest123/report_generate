function PrefaceForm({ sendPreface, onPrefaceChange }) {

    return (
        <form className="form-card">

            <div className="page-header">
                <h2>คำนำ</h2>
                <p>เขียนคำนำของรายงาน</p>
            </div>

            <div className="form-group">

                <label htmlFor="preface">
                    เนื้อหาคำนำ
                </label>

                <textarea
                    id="preface"
                    className="form-input preface-textarea"
                    value={sendPreface}
                    onChange={(event) => {
                        onPrefaceChange(event.target.value);
                    }}
                    placeholder="กรอกเนื้อหาคำนำ"
                />

            </div>

        </form>
    );
}

export default PrefaceForm;