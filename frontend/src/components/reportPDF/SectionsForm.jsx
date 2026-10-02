function SectionsForm({ sendSections, onSectionChange }) {

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
                        ...section.subsections, //?
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
                                    index !==
                                    subsectionIndex
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
                                    index !==
                                    subsectionIndex
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
                                    index !==
                                    subsectionIndex
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
                                    index !==
                                    subsectionIndex
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
        <div>

            <h2>เนื้อหา</h2>

            {sendSections.map(
                (section, sectionIndex) => (

                    <div key={sectionIndex}>

                        <h3>
                            หัวข้อหลัก{" "}
                            {sectionIndex + 1}
                        </h3>


                        {/* หัวข้อหลัก */}

                        <input
                            type="text"
                            value={section.title}
                            onChange={(event) =>
                                handleTitleChange(
                                    sectionIndex,
                                    event.target.value
                                )
                            }
                            placeholder="หัวข้อหลัก"
                            required
                        />

                        <button
                            type="button"
                            onClick={() =>
                                handleRemoveSection(
                                    sectionIndex
                                )
                            }
                        >
                            ลบหัวข้อหลัก
                        </button>


                        {/* เนื้อหาหัวข้อหลัก */}

                        {section.content === null ? (

                            <button
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

                            <div>

                                <h4>
                                    เนื้อหาของหัวข้อหลัก {sectionIndex + 1} 
                                </h4>

                                <textarea
                                    value={section.content}
                                    onChange={(event) =>
                                        handleContentChange(
                                            sectionIndex,
                                            event.target.value
                                        )
                                    }
                                    placeholder="เนื้อหาหัวข้อหลัก"
                                    rows="8"
                                />

                                <button
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


                        {/* หัวข้อย่อย */}

                        <h4>หัวข้อย่อย</h4>

                        {section.subsections.map(
                            (
                                subsection,
                                subsectionIndex
                            ) => (

                                <div
                                    key={
                                        subsectionIndex
                                    }
                                >

                                    <h5>
                                        หัวข้อย่อย{" "}
                                        {sectionIndex + 1}.
                                        {
                                            
                                            subsectionIndex +
                                            1
                                        }
                                    </h5>


                                    <input
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
                                                event
                                                    .target
                                                    .value
                                            )
                                        }
                                        placeholder="หัวข้อย่อย"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveSubsection(
                                                sectionIndex,
                                                subsectionIndex
                                            )
                                        }
                                    >
                                        ลบหัวข้อย่อย
                                    </button>


                                    {/* เนื้อหาหัวข้อย่อย */}

                                    {subsection.content ===
                                    null ? (

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleAddSubsectionContent(
                                                    sectionIndex,
                                                    subsectionIndex
                                                )
                                            }
                                        >
                                            + เพิ่มเนื้อหาหัวข้อย่อย
                                        </button>

                                    ) : (

                                        <div>

                                            <h6>
                                                เนื้อหาหัวข้อย่อย
                                                {sectionIndex + 1}.
                                                {subsectionIndex + 1}
                                            </h6>

                                            <textarea
                                                value={
                                                    subsection.content
                                                }
                                                onChange={(
                                                    event
                                                ) =>
                                                    handleSubsectionContentChange(
                                                        sectionIndex,
                                                        subsectionIndex,
                                                        event
                                                            .target
                                                            .value
                                                    )
                                                }
                                                placeholder="เนื้อหาหัวข้อย่อย"
                                                rows="6"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveSubsectionContent(
                                                        sectionIndex,
                                                        subsectionIndex
                                                    )
                                                }
                                            >
                                                ลบเนื้อหาหัวข้อย่อย
                                            </button>

                                        </div>
                                    )}

                                </div>
                            )
                        )}


                        <button
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
                )
            )}


            {/* เพิ่มหัวข้อหลัก */}

            <button
                type="button"
                onClick={handleAddSection}
            >
                + เพิ่มหัวข้อหลัก
            </button>

        </div>
    );
}

export default SectionsForm;