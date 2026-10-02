function BibliographyForm({
    sendBibliography,
    onBibliographyChange
}) {

    const handleAddBibliography = () => {
        const newData = [...sendBibliography,""];
        onBibliographyChange(newData); 
    };

    const handleBibliographyChange = (bibliographyValue,bibliographyIndex) => {
        const newBibliography = sendBibliography.map((data,index)=>{
            if(index !== bibliographyIndex) return data;

            return bibliographyValue;
        })

        onBibliographyChange(newBibliography)
    };

    return (
        <div>

            <h2>บรรณานุกรม</h2>

            {sendBibliography.map( (bibliography,bibliographyIndex) => (

                <div
                    key={bibliographyIndex}
                >
                    <h3>บรรณานุกรม {bibliographyIndex + 1}</h3>

                    <textarea
                        value={bibliography}
                        onChange={(event) =>
                            handleBibliographyChange(
                                event.target.value,
                                bibliographyIndex
                            )
                        }
                        placeholder="กรอกบรรณานุกรม"
                        rows="12"
                    />
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddBibliography}
            >
                + เพิ่มรายการบรรณานุกรม
            </button>
        </div>
    );
}

export default BibliographyForm;