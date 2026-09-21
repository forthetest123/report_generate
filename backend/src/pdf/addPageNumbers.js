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


function addPageNumbers(
    doc,
    regularFont,
    tocPageCount
) {

    const range =
        doc.bufferedPageRange();


    for (
        let i = 0;
        i < range.count;
        i++
    ) {

        doc.switchToPage(
            range.start + i
        );


        // =====================================
        // หน้าปก
        // =====================================

        if (i === 0) {
            continue;
        }


        let pageNumber;


        // =====================================
        // คำนำ
        // =====================================

        if (i === 1) {

            pageNumber =
                THAI_PAGE_NUMBERS[0];

        }


        // =====================================
        // สารบัญ
        // =====================================

        else if (
            i >= 2 &&
            i < 2 + tocPageCount
        ) {

            const tocIndex =
                i - 2;

            pageNumber =
                THAI_PAGE_NUMBERS[
                    tocIndex + 1
                ];

        }


        // =====================================
        // เนื้อหา
        // =====================================

        else {

            const bodyPage =
                i
                - 2
                - tocPageCount
                + 1;

            pageNumber =
                String(bodyPage);

        }


        // =====================================
        // วาดเลขหน้า
        // =====================================

        doc
            .font(regularFont)
            .fontSize(14)
            .text(
                pageNumber,
                0,
                25,
                {
                    width:
                        doc.page.width - 25,
                    align: "right",
                    lineBreak: false
                }
            );
    }
}


module.exports = {
    addPageNumbers
};