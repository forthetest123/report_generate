function PrefaceForm({ sendPreface, onPrefaceChange }) {

    return (
        <div>
            <h2>คำนำ</h2>

            <textarea
                value={sendPreface}
                onChange={(event) => {
                    onPrefaceChange(event.target.value);
                }}
                placeholder="กรอกคำนำ"
                rows="15"
            />
        </div>
    );
}

export default PrefaceForm;