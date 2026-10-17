const { createParagraphsPDF } = require("./createParagraphsPDF");
const { checkPageSpace } = require("./checkPageSpace");
const {
    createHeadingPDF
} = require("./createHeadingPDF");


function createBodyPDF(
    doc,
    sections,
    regularFont,
    boldFont,
    tocPageCount
) {

    const toc = [];

    if (!sections || !Array.isArray(sections)) {
        return toc;
    }


    sections.forEach((section) => {

        if (section.title === "") return;

        // =========================
        // หัวข้อหลัก
        // =========================

        const sectionTitle =
            section.title;


        const sectionTitleHeight =
            doc.heightOfString(sectionTitle, {
                width:
                    doc.page.width
                    - doc.page.margins.left
                    - doc.page.margins.right,

                font: boldFont,
                fontSize: 20
            });


        // เผื่อพื้นที่ให้หัวข้อ + เนื้อหาบางส่วน
        const requiredHeight =
            sectionTitleHeight + 80;


        checkPageSpace(
            doc,
            requiredHeight
        );


        const range = doc.bufferedPageRange();

        const currentPageIndex =
            range.start + range.count - 1;

        const displayPage =
            currentPageIndex - 2 - (tocPageCount - 1);


        toc.push({
            title: section.title,
            page: displayPage,
            level: "main"
        });

        createHeadingPDF(
            doc,
            section.title,
            {
                fontSize: 20,
                lineGap: 3,
                align: "center"
            },
            boldFont
        );

        doc.moveDown(0.5);


        // =========================
        // Content ของหัวข้อหลัก
        // =========================

        if (section.content) {

            createParagraphsPDF(
                doc,
                section.content,
                {
                    fontSize: 16,
                    lineGap: 3,
                    indent: 30,
                    align: "left"
                },
                regularFont
            );

            doc.moveDown(0.7);
        }


        // =========================
        // หัวข้อย่อย
        // =========================

        if (
            Array.isArray(section.subsections)
            &&
            section.subsections.length > 0
        ) {

            section.subsections.forEach(
                (subsection) => {

                    // ถ้าไม่มี title
                    // ไม่ต้องสร้างหัวข้อ
                    if (subsection.title) {

                        const subsectionTitleHeight =
                            doc.heightOfString(
                                subsection.title,
                                {
                                    width:
                                        doc.page.width
                                        - doc.page.margins.left
                                        - doc.page.margins.right,

                                    font: boldFont,
                                    fontSize: 18
                                }
                            );


                        checkPageSpace(
                            doc,
                            subsectionTitleHeight + 60
                        );

                        const range = doc.bufferedPageRange();

                        const currentPageIndex =
                            range.start + range.count - 1;

                        const displayPage =
                            currentPageIndex - 2 - (tocPageCount - 1);
                        

                        toc.push({
                            title: subsection.title,
                            page: displayPage,
                            level: "sub"
                        });


                        createHeadingPDF(
                            doc,
                            subsection.title,
                            {
                                fontSize: 18,
                                lineGap: 3,
                                align: "left"
                            },
                            boldFont
                        );
                    }


                    // =========================
                    // เนื้อหาหัวข้อย่อย
                    // =========================

                    if (subsection.content) {

                        createParagraphsPDF(
                            doc,
                            subsection.content,
                            {
                                fontSize: 16,
                                lineGap: 3,
                                indent: 30,
                                align: "left"
                            },
                            regularFont
                        );

                        doc.moveDown(0.7);
                    }
                }
            );
        }


        // =========================
        // หน้าจบของหัวข้อ
        // =========================


        doc.moveDown(1);
    });


    return toc;
}


module.exports = {
    createBodyPDF
};