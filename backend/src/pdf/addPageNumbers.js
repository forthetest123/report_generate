const THAI_PAGE_NUMBERS = [
    "ก",
    "ข",
    "ค",
    "ง",
    "จ",
    "ฉ",
    "ช",
    "ซ",
    "ฌ",
    "ญ"
];

function addPageNumbers(doc, regularFont) {

    const range = doc.bufferedPageRange();

    for (let i = 0; i < range.count; i++) {

        doc.switchToPage(range.start + i);

        // หน้าปก = ไม่ใส่เลข
        if (i === 0) {
            continue;
        }

        let pageNumber;

        // หน้า 2 = ก
        // หน้า 3 = ข
        if (i === 1) {
            pageNumber = "ก";
        }

        else if (i === 2) {
            pageNumber = "ข";
        }

        // หน้า 4 เป็นต้นไป = 1, 2, 3...
        else {
            pageNumber = String(i - 2);
        }

        doc
            .font(regularFont)
            .fontSize(14)
            .text(
                pageNumber,
                0,
                25,
                {
                    width: doc.page.width - 25,
                    align: "right",
                    lineBreak: false
                }
            );
    }
}

module.exports = {
    addPageNumbers
};