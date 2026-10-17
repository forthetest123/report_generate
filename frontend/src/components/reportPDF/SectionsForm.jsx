function SectionsForm({
    sendSections,
    onSectionChange
}) {

    // ========================================
    // MAIN SECTION
    // ========================================

    const handleAddSection = () => {

        const newSection = {
            title: "",
            content: null,
            subsections: []
        };

        onSectionChange([
            ...sendSections,
            newSection
        ]);
    };


    const handleRemoveSection = (sectionIndex) => {

        const newSections = sendSections.filter(
            (_, index) =>
                index !== sectionIndex
        );

        onSectionChange(newSections);
    };


    const handleTitleChange = (
        sectionIndex,
        value
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,
                    title: value
                };
            }
        );

        onSectionChange(newSections);
    };


    // ========================================
    // MAIN CONTENT
    // ========================================

    const handleAddContent = (sectionIndex) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,
                    content: ""
                };
            }
        );

        onSectionChange(newSections);
    };


    const handleContentChange = (
        sectionIndex,
        value
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,
                    content: value
                };
            }
        );

        onSectionChange(newSections);
    };


    const handleRemoveContent = (sectionIndex) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,
                    content: null
                };
            }
        );

        onSectionChange(newSections);
    };


    // ========================================
    // SUBSECTION
    // ========================================

    const handleAddSubsection = (sectionIndex) => {

        const newSubsection = {
            title: "",
            content: null
        };

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,

                    subsections: [
                        ...section.subsections,
                        newSubsection
                    ]
                };
            }
        );

        onSectionChange(newSections);
    };


    const handleRemoveSubsection = (
        sectionIndex,
        subsectionIndex
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,

                    subsections:
                        section.subsections.filter(
                            (_, index) =>
                                index !== subsectionIndex
                        )
                };
            }
        );

        onSectionChange(newSections);
    };


    const handleSubsectionTitleChange = (
        sectionIndex,
        subsectionIndex,
        value
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,

                    subsections:
                        section.subsections.map(
                            (subsection, index) => {

                                if (
                                    index !== subsectionIndex
                                ) {
                                    return subsection;
                                }

                                return {
                                    ...subsection,
                                    title: value
                                };
                            }
                        )
                };
            }
        );

        onSectionChange(newSections);
    };


    // ========================================
    // SUBSECTION CONTENT
    // ========================================

    const handleAddSubsectionContent = (
        sectionIndex,
        subsectionIndex
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,

                    subsections:
                        section.subsections.map(
                            (subsection, index) => {

                                if (
                                    index !== subsectionIndex
                                ) {
                                    return subsection;
                                }

                                return {
                                    ...subsection,
                                    content: ""
                                };
                            }
                        )
                };
            }
        );

        onSectionChange(newSections);
    };


    const handleSubsectionContentChange = (
        sectionIndex,
        subsectionIndex,
        value
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,

                    subsections:
                        section.subsections.map(
                            (subsection, index) => {

                                if (
                                    index !== subsectionIndex
                                ) {
                                    return subsection;
                                }

                                return {
                                    ...subsection,
                                    content: value
                                };
                            }
                        )
                };
            }
        );

        onSectionChange(newSections);
    };


    const handleRemoveSubsectionContent = (
        sectionIndex,
        subsectionIndex
    ) => {

        const newSections = sendSections.map(
            (section, index) => {

                if (index !== sectionIndex) {
                    return section;
                }

                return {
                    ...section,

                    subsections:
                        section.subsections.map(
                            (subsection, index) => {

                                if (
                                    index !== subsectionIndex
                                ) {
                                    return subsection;
                                }

                                return {
                                    ...subsection,
                                    content: null
                                };
                            }
                        )
                };
            }
        );

        onSectionChange(newSections);
    };


    // ========================================
    // UI
    // ========================================

    return (
        <form className="form-card">

            <div className="page-header">
                <h2>เนื้อหา</h2>

                <p>
                    เพิ่มหัวข้อหลัก และหัวข้อย่อยของรายงาน
                </p>
            </div>


            {sendSections.map(
                (section, sectionIndex) => (

                    <div
                        className="section-card"
                        key={sectionIndex}
                    >

                        {/* SECTION HEADER */}

                        <div className="section-header">

                            <div>
                                <div className="section-title">
                                    หัวข้อหลัก {sectionIndex + 1}
                                </div>

                                <div className="section-description">
                                    กรอกชื่อหัวข้อหลักของรายงาน
                                </div>
                            </div>

                            <button
                                className="text-danger-button"
                                type="button"
                                onClick={() =>
                                    handleRemoveSection(
                                        sectionIndex
                                    )
                                }
                            >
                                ลบหัวข้อหลัก {""} {sectionIndex+1}
                            </button>

                        </div>


                        {/* MAIN TITLE */}

                        <div className="form-group">

                            <label
                                htmlFor={`section-title-${sectionIndex}`}
                            >
                                ชื่อหัวข้อหลัก
                            </label>

                            <input
                                id={`section-title-${sectionIndex}`}
                                className="form-input"
                                type="text"
                                value={section.title}
                                onChange={(event) =>
                                    handleTitleChange(
                                        sectionIndex,
                                        event.target.value
                                    )
                                }
                                placeholder="เช่น บทนำ"
                                required
                            />

                        </div>


                        {/* MAIN CONTENT */}

                        <div className="content-block">

                            <div className="content-header">

                                <div className="content-title">
                                    เนื้อหาหัวข้อหลัก
                                </div>

                                {section.content === null && (
                                    <span className="content-status">
                                        ยังไม่มีเนื้อหา
                                    </span>
                                )}

                            </div>


                            {section.content === null ? (

                                <button
                                    className="form-button"
                                    type="button"
                                    onClick={() =>
                                        handleAddContent(
                                            sectionIndex
                                        )
                                    }
                                >
                                    + เพิ่มเนื้อหาหัวข้อหลัก 
                                </button>

                            ) : (

                                <div className="content-editor">

                                    <textarea
                                        className="form-input section-textarea"
                                        value={section.content}
                                        onChange={(event) =>
                                            handleContentChange(
                                                sectionIndex,
                                                event.target.value
                                            )
                                        }
                                        placeholder="กรอกเนื้อหาของหัวข้อหลัก"
                                    />

                                    <button
                                        className="text-danger-button"
                                        type="button"
                                        onClick={() =>
                                            handleRemoveContent(
                                                sectionIndex
                                            )
                                        }
                                    >
                                        ลบเนื้อหาหัวข้อหลัก
                                    </button>

                                </div>
                            )}

                        </div>


                        {/* SUBSECTIONS */}

                        <div className="subsection-area">

                            <div className="subsection-header">

                                <div>
                                    <div className="subsection-title">
                                        หัวข้อย่อย
                                    </div>

                                    <div className="section-description">
                                        เพิ่มหัวข้อย่อยภายในหัวข้อหลักนี้
                                    </div>
                                </div>

                            </div>


                            <div className="subsections">

                                {section.subsections.map(
                                    (
                                        subsection,
                                        subsectionIndex
                                    ) => (

                                        <div
                                            className="subsection-card"
                                            key={subsectionIndex}
                                        >

                                            {/* SUBSECTION HEADER */}

                                            <div className="subsection-item-header">

                                                <div className="subsection-number">
                                                    {sectionIndex + 1}.
                                                    {subsectionIndex + 1}
                                                </div>

                                                <button
                                                    className="text-danger-button"
                                                    type="button"
                                                    onClick={() =>
                                                        handleRemoveSubsection(
                                                            sectionIndex,
                                                            subsectionIndex
                                                        )
                                                    }
                                                >
                                                    ลบหัวข้อย่อย {""}
                                                    {sectionIndex + 1}.
                                                    {subsectionIndex + 1}
                                                </button>

                                            </div>


                                            {/* SUBSECTION TITLE */}

                                            <div className="form-group">

                                                <label
                                                    htmlFor={`subsection-title-${sectionIndex}-${subsectionIndex}`}
                                                >
                                                    ชื่อหัวข้อย่อย
                                                </label>

                                                <input
                                                    id={`subsection-title-${sectionIndex}-${subsectionIndex}`}
                                                    className="form-input"
                                                    type="text"
                                                    value={
                                                        subsection.title
                                                    }
                                                    onChange={(
                                                        event
                                                    ) =>
                                                        handleSubsectionTitleChange(
                                                            sectionIndex,
                                                            subsectionIndex,
                                                            event.target.value
                                                        )
                                                    }
                                                    placeholder="เช่น ความหมาย"
                                                    required
                                                />

                                            </div>


                                            {/* SUBSECTION CONTENT */}

                                            <div className="content-block">

                                                <div className="content-header">

                                                    <div className="content-title">
                                                        เนื้อหาหัวข้อย่อย {""}
                                                        {sectionIndex + 1}.
                                                        {subsectionIndex + 1}
                                                    </div>

                                                    {subsection.content ===
                                                        null && (
                                                        <span className="content-status">
                                                            ยังไม่มีเนื้อหา
                                                        </span>
                                                    )}

                                                </div>


                                                {subsection.content ===
                                                null ? (

                                                    <button
                                                        className="form-button"
                                                        type="button"
                                                        onClick={() =>
                                                            handleAddSubsectionContent(
                                                                sectionIndex,
                                                                subsectionIndex
                                                            )
                                                        }
                                                    >
                                                        + เพิ่มเนื้อหาหัวข้อย่อย {""}
                                                        {sectionIndex + 1}.
                                                        {subsectionIndex + 1}
                                                    </button>

                                                ) : (

                                                    <div className="content-editor">

                                                        <textarea
                                                            className="form-input subsection-textarea"
                                                            value={
                                                                subsection.content
                                                            }
                                                            onChange={(
                                                                event
                                                            ) =>
                                                                handleSubsectionContentChange(
                                                                    sectionIndex,
                                                                    subsectionIndex,
                                                                    event.target.value
                                                                )
                                                            }
                                                            placeholder="กรอกเนื้อหาของหัวข้อย่อย"
                                                        />

                                                        <button
                                                            className="text-danger-button"
                                                            type="button"
                                                            onClick={() =>
                                                                handleRemoveSubsectionContent(
                                                                    sectionIndex,
                                                                    subsectionIndex
                                                                )
                                                            }
                                                        >
                                                            ลบเนื้อหาหัวข้อย่อย {""}
                                                            {sectionIndex + 1}.
                                                            {subsectionIndex + 1}
                                                        </button>

                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                    )
                                )}

                            </div>


                            <button
                                className="secondary-button"
                                type="button"
                                onClick={() =>
                                    handleAddSubsection(
                                        sectionIndex
                                    )
                                }
                            >
                                + เพิ่มหัวข้อย่อย 
                            </button>

                        </div>

                    </div>
                )
            )}


            {/* ADD MAIN SECTION */}

            <button
                className="form-button add-section-button"
                type="button"
                onClick={handleAddSection}
            >
                + เพิ่มหัวข้อหลัก
            </button>

        </form>
    );
}

export default SectionsForm;