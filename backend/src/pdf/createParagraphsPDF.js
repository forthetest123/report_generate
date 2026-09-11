// function createParagraphsPDF(doc, text, options = {} , regularFont) {

//     const {
//         fontSize = 16,
//         lineGap = 3,
//         indent = 30,
//         align = "left"
//     } = options;

//     if (!text) return;


    
//     // รองรับข้อความก้อนเดียว
//     // ถ้ามี \n\n จะถือว่าเป็น paragraph ใหม่
//     const paragraphs = text
//     .split(/\n\s*\n/)
//     .map(text => text.trim())
//     .filter(Boolean);


//     paragraphs.forEach((paragraph, index) => {

//         doc.font(regularFont)
//             .fontSize(fontSize)
//             .text(` ${paragraph}`, {
//                 width: doc.page.width
//                     - doc.page.margins.left
//                     - doc.page.margins.right,

//                 align,

//                 indent,

//                 lineGap
//             });

//         // เว้นระหว่าง paragraph
//         if (index < paragraphs.length - 1) {
//             doc.moveDown(0.4);
//         }
//     });
// }

// module.exports = {
//     createParagraphsPDF
// };


function createParagraphsPDF(
    doc,
    text,
    options = {},
    regularFont
) {

    const {
        fontSize = 16,
        lineGap = 3,
        indent = 30,
        align = "left"
    } = options;

    if (!text) return;


    // =========================
    // แยก Paragraph
    // =========================

    const paragraphs = text
        .split(/\n\s*\n/)
        .map(text => text.replace(/\s*\n\s*/g, " ").trim())
        .filter(Boolean);


    // =========================
    // Thai word segmentation
    // =========================

    const segmenter = new Intl.Segmenter("th", {
        granularity: "word"
    });


    // ความกว้างพื้นที่เขียน
    const pageWidth =
        doc.page.width
        - doc.page.margins.left
        - doc.page.margins.right;


    paragraphs.forEach((paragraph, paragraphIndex) => {

        const segments = [
            ...segmenter.segment(paragraph)
        ];


        const lines = [];

        let currentLine = "";


        // =========================
        // แบ่งคำเป็นบรรทัด
        // =========================

        segments.forEach(segment => {

            const word = segment.segment;

            const testLine =
                currentLine + word;


            const testWidth =
                doc
                    .font(regularFont)
                    .fontSize(fontSize)
                    .widthOfString(testLine);


            // บรรทัดแรกต้องเผื่อ indent
            const currentIndent =
                lines.length === 0
                    ? indent
                    : 0;


            const availableWidth =
                pageWidth - currentIndent;


            if (
                currentLine &&
                testWidth > availableWidth
            ) {

                lines.push(currentLine);

                currentLine = word;

            } else {

                currentLine = testLine;
            }
        });


        // เหลือข้อความสุดท้าย
        if (currentLine) {
            lines.push(currentLine);
        }


        // =========================
        // เขียนแต่ละบรรทัด
        // =========================

        lines.forEach((line, lineIndex) => {

            doc
                .font(regularFont)
                .fontSize(fontSize)
                .text(line, {
                    width: pageWidth,

                    align,

                    indent:
                        lineIndex === 0
                            ? indent
                            : 0,

                    lineGap,
                    
                    lineBreak: false
                });
        });


        // =========================
        // ระยะห่างระหว่าง Paragraph
        // =========================

        if (
            paragraphIndex <
            paragraphs.length - 1
        ) {
            doc.moveDown(0.5);
        }
    });
}


module.exports = {
    createParagraphsPDF
};