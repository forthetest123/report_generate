function BibliographyForm({
    sendBibliography,
    onBibliographyChange
}) {

    const handleAddBibliography = () => {
        const newData = [...sendBibliography, ""];
        onBibliographyChange(newData);
    };

    const handleBibliographyChange = (
        bibliographyValue,
        bibliographyIndex
    ) => {

        const newBibliography = sendBibliography.map(
            (data, index) => {

                if (index !== bibliographyIndex) {
                    return data;
                }

                return bibliographyValue;
            }
        );

        onBibliographyChange(newBibliography);
    };

    const handleDeleteBibliography = (indexBibliography) => {

        const newBibliography = sendBibliography.filter(
            (_, index) => index !== indexBibliography
        );

        onBibliographyChange(newBibliography);
    };

    return (
        <form className="form-card">

            <div className="page-header">
                <h2>บรรณานุกรม</h2>
                <p>เพิ่มแหล่งอ้างอิงที่ใช้จัดทำรายงาน</p>
            </div>

            {sendBibliography.map(
                (bibliography, bibliographyIndex) => (

                    <div
                        className="section-card bibliography-card"
                        key={bibliographyIndex}
                    >

                        <div className="section-header">

                            <div className="section-title">
                                รายการที่ {bibliographyIndex + 1}
                            </div>

                            <button
                                className="text-danger-button"
                                type="button"
                                onClick={() =>
                                    handleDeleteBibliography(
                                        bibliographyIndex
                                    )
                                }
                            >
                                ลบรายการ
                            </button>

                        </div>

                        <div className="form-group">

                            <label
                                htmlFor={`bibliography-${bibliographyIndex}`}
                            >
                                รายละเอียดแหล่งอ้างอิง
                            </label>

                            <textarea
                                id={`bibliography-${bibliographyIndex}`}
                                className="form-input bibliography-textarea"
                                value={bibliography}
                                onChange={(event) =>
                                    handleBibliographyChange(
                                        event.target.value,
                                        bibliographyIndex
                                    )
                                }
                                placeholder="กรอกชื่อผู้แต่ง ชื่อเรื่อง ปีที่เผยแพร่ หรือ URL"
                            />

                        </div>

                    </div>
                )
            )}

            <button
                type="button"
                className="form-button"
                onClick={handleAddBibliography}
            >
                + เพิ่มรายการบรรณานุกรม
            </button>

        </form>
    );
}

export default BibliographyForm;