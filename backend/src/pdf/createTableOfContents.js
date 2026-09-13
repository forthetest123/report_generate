function createTableOfContents(
    doc,
    items,
    regularFont,
    boldFont,
    isContinuation = false
) {


    // =========================
    // หัวข้อสารบัญ
    // =========================

    if (!isContinuation) {

        doc
            .font(boldFont)
            .fontSize(20)
            .text("สารบัญ", {
                align: "center"
            });

        doc.moveDown(1);
    }


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

    const headerY = doc.y;


    doc
        .font(boldFont)
        .fontSize(14)
        .text(
            "เรื่อง",
            leftX,
            headerY,
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
            headerY,
            {
                width: 40,
                align: "right",
                lineBreak: false
            }
        );


    doc.y =
        headerY + 25;


    // =========================
    // รายการ
    // =========================

    for (
        let index = 0;
        index < items.length;
        index++
    ) {

        const item =
            items[index];


        // =========================
        // ตำแหน่งหัวข้อ
        // =========================

        const itemLeftX =
            item.level === "sub"
                ? 100
                : leftX;


        const itemTitleWidth =
            pageNumberX
            - itemLeftX
            - 15;


        // =========================
        // Font
        // =========================

        const font =
            item.level === "main"
                ? boldFont
                : regularFont;


        const fontSize = 14;


        // =========================
        // คำนวณความสูง
        // =========================

        const titleHeight =
            doc.heightOfString(
                item.title,
                {
                    width: itemTitleWidth,
                    font,
                    fontSize
                }
            );


        const itemHeight =
            titleHeight + 5;


        // =========================
        // พื้นที่กระดาษที่เหลือ
        // =========================

        const availableHeight =
            doc.page.height
            - doc.page.margins.bottom
            - doc.y;


        // =========================
        // ถ้าพื้นที่ไม่พอ
        // =========================

        if (
            itemHeight >
            availableHeight
        ) {

            return items.slice(index);
        }


        // =========================
        // ตำแหน่ง Y
        // =========================

        const itemY =
            doc.y;


        // =========================
        // ชื่อหัวข้อ
        // =========================

        doc
            .font(font)
            .fontSize(fontSize)
            .text(
                item.title,
                itemLeftX,
                itemY,
                {
                    width: itemTitleWidth,
                    align: "left"
                }
            );


        // =========================
        // เลขหน้า
        // =========================

        doc
            .font(regularFont)
            .fontSize(fontSize)
            .text(
                String(item.page),
                pageNumberX,
                itemY,
                {
                    width: 40,
                    align: "right",
                    lineBreak: false
                }
            );


        // =========================
        // ขยับไปยังรายการถัดไป
        // =========================

        doc.y =
            itemY
            + titleHeight
            + 5;
    }


    // =========================
    // วาดครบทุก item แล้ว
    // =========================

    return [];
}


module.exports = {
    createTableOfContents
};