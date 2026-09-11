function createSummaryPDF(
    doc,
    text,
    regularFont,
    boldFont
) {

    if (!text) return;

    // =========================
    // เช็กว่าหน้าสรุปอยู่หน้าไหน
    // =========================

    const range =
        doc.bufferedPageRange();

    const currentPageIndex =
        range.start + range.count - 1;

    const displayPage =
        currentPageIndex - 2;

    // =========================
    // หัวข้อ
    // =========================

    doc
        .font(boldFont)
        .fontSize(20)
        .text("สรุป", {
            align: "center"
        });


    doc.moveDown(0.5);


    // =========================
    // เนื้อหา
    // =========================

    const { createParagraphsPDF } =
        require("./createParagraphsPDF");

    createParagraphsPDF(
        doc,
        text,
        {
            fontSize: 16,
            lineGap: 3,
            indent: 30,
            align: "left"
        },
        regularFont
    );

    return {
        title: "สรุป",
        page: displayPage,
        level: "main"
    };
}


module.exports = {
    createSummaryPDF
};