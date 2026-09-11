function createHeadingPDF(
    doc,
    text,
    options = {},
    boldFont
) {

    const {
        fontSize = 20,
        lineGap = 3,
        align = "center"
    } = options;

    if (!text) return;


    // =========================
    // ความกว้างหน้า
    // =========================

    const pageWidth =
        doc.page.width
        - doc.page.margins.left
        - doc.page.margins.right;


    // =========================
    // แยกคำภาษาไทย
    // =========================

    const segmenter = new Intl.Segmenter("th", {
        granularity: "word"
    });


    let segments = [
        ...segmenter.segment(text)
    ].map(item => item.segment);


    // =========================
    // รวมเลขหัวข้อกับคำแรก
    //
    // 4. + ประเภท
    // 3. + พระราชบัญญัติ
    // =========================

    if (
        segments.length >= 2 &&
        /^\d+(\.\d+)*\.$/.test(segments[0])
    ) {

        segments[0] =
            segments[0] + segments[1];

        segments.splice(1, 1);
    }


    // =========================
    // สร้างบรรทัด
    // =========================

    const lines = [];

    let currentLine = "";


    segments.forEach(word => {

        const testLine =
            currentLine + word;


        const testWidth =
            doc
                .font(boldFont)
                .fontSize(fontSize)
                .widthOfString(testLine);


        if (
            currentLine &&
            testWidth > pageWidth
        ) {

            lines.push(currentLine);

            currentLine = word;

        } else {

            currentLine = testLine;
        }
    });


    if (currentLine) {
        lines.push(currentLine);
    }


    // =========================
    // เขียนหัวข้อ
    // =========================

    lines.forEach(line => {

        doc
            .font(boldFont)
            .fontSize(fontSize)
            .text(line, {
                width: pageWidth,
                align,
                lineGap,
                lineBreak: false
            });
    });
}


module.exports = {
    createHeadingPDF
};