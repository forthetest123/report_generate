function createBibliographyPDF(
    doc,
    bibliography,
    regularFont,
    boldFont,
    tocPageCount
) {

    if (!bibliography || !bibliography.length) {
        return;
    }

    // =========================
    // เช็กว่าหน้าสรุปอยู่หน้าไหน
    // =========================

    const range =
        doc.bufferedPageRange();

    const currentPageIndex =
        range.start + range.count - 1;

    const displayPage =
        currentPageIndex - 2 - (tocPageCount - 1);

    // =========================
    // หัวข้อ
    // =========================

    doc
        .font(boldFont)
        .fontSize(20)
        .text("บรรณานุกรม", {
            align: "center"
        });


    doc.moveDown(0.8);


    // =========================
    // รายการอ้างอิง
    // =========================

    bibliography.forEach((item) => {

        doc
            .font(regularFont)
            .fontSize(16)
            .text(`• ${item}`, {
                width:
                    doc.page.width
                    - doc.page.margins.left
                    - doc.page.margins.right,

                align: "left",

                indent: 20,

                lineGap: 3
            });


        doc.moveDown(0.4);
    });

    return {
        title: "บรรณานุกรม",
        page: displayPage,
        level: "main"
    };
}


module.exports = {
    createBibliographyPDF
};