function createTableOfContents(
    doc,
    items,
    regularFont,
    boldFont
) {

    // =========================
    // หัวข้อสารบัญ
    // =========================

    doc
        .font(boldFont)
        .fontSize(20)
        .text("สารบัญ", {
            align: "center"
        });

    doc.moveDown(1);

        // =========================
    // ตำแหน่งคอลัมน์
    // =========================

    const leftX =
        doc.page.margins.left;

    const pageNumberX =
        doc.page.width
        - doc.page.margins.right
        - 40;

    const titleWidth =
        pageNumberX
        - leftX
        - 15;


    // =========================
    // หัวตาราง
    // =========================

    doc
        .font(boldFont)
        .fontSize(14)
        .text(
            "เรื่อง",
            leftX,
            doc.y,
            {
                width: titleWidth,
                align: "left"
            }
        );


    doc
        .font(boldFont)
        .fontSize(14)
        .text(
            "หน้า",
            pageNumberX,
            doc.y - 17,
            {
                width: 40,
                align: "right",
                lineBreak: false
            }
        );


    doc.moveDown(0.5);


    // =========================
    // รายการ
    // =========================

    items.forEach((item) => {

        const leftX =
            item.level === "sub"
                ? 100
                : 72;


        const pageNumberX =
            doc.page.width - 72 - 40;


        const titleWidth =
            pageNumberX - leftX - 15;


        const itemY =
            doc.y;


        // =========================
        // Font
        // =========================

        const font =
            item.level === "main"
                ? boldFont
                : regularFont;


        // =========================
        // หัวข้อ
        // =========================

        doc
            .font(font)
            .fontSize(14)
            .text(item.title,leftX,itemY, {
                width: titleWidth,
                align: "left"
            });


        // =========================
        // เลขหน้า
        // =========================

        doc
            .font(regularFont)
            .fontSize(14)
            .text(String(item.page),pageNumberX,itemY, {
                width: 40,
                align: "right",
                lineBreak: false
            });


        // =========================
        // ขยับรายการถัดไป
        // =========================

        const titleHeight =
            doc.heightOfString(item.title, {
                width: titleWidth,
                font,
                fontSize: 14
            });


        doc.y =
            itemY + titleHeight + 5;
    });
}


module.exports = {
    createTableOfContents
};