function calculateTableOfContentsPages(
    doc,
    items,
    regularFont,
    boldFont
) {

    // =========================
    // ค่าพื้นฐาน
    // =========================

    const top =
        doc.page.margins.top;

    const bottom =
        doc.page.margins.bottom;

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

    const fontSize = 14;

    // ความสูงที่ใช้สำหรับ
    // "สารบัญ"
    const titleHeight =
        doc.heightOfString("สารบัญ", {
            width: doc.page.width
                - doc.page.margins.left
                - doc.page.margins.right,
            font: boldFont,
            fontSize: 20
        });

    // ระยะหลังหัวข้อสารบัญ
    const titleSpacing = 20;

    // ความสูงหัวตาราง
    const headerHeight = 25;

    // ระยะห่างแต่ละรายการ
    const itemSpacing = 5;


    // =========================
    // เริ่มคำนวณ
    // =========================

    let pageCount = 1;

    let currentY =
        top
        + titleHeight
        + titleSpacing
        + headerHeight;


    // =========================
    // วนรายการ
    // =========================

    items.forEach((item) => {

        const itemLeftX =
            item.level === "sub"
                ? 100
                : leftX;


        const itemTitleWidth =
            pageNumberX
            - itemLeftX
            - 15;


        const font =
            item.level === "main"
                ? boldFont
                : regularFont;


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
            titleHeight
            + itemSpacing;


        // =========================
        // พื้นที่เหลือ
        // =========================

        const availableHeight =
            doc.page.height
            - bottom
            - currentY;


        // =========================
        // ถ้าใส่ไม่พอ
        // =========================

        if (itemHeight > availableHeight) {

            pageCount++;

            // หน้าต่อไปไม่มี
            // หัวข้อ "สารบัญ"
            // แต่มี "เรื่อง / หน้า"

            currentY =
                top
                + headerHeight;
        }


        // =========================
        // วางรายการ
        // =========================

        currentY += itemHeight;
    });


    return pageCount;
}


module.exports = {
    calculateTableOfContentsPages
};