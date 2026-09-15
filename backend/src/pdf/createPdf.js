const PDFDocument = require("pdfkit");

const {
    createParagraphsPDF
} = require("./createParagraphsPDF");

const {
    createBodyPDF
} = require("./createBodyPDF");

const {
    addPageNumbers
} = require("./addPageNumbers");

const {
    createTableOfContents
} = require("./createTableOfContents");

const {
    createSummaryPDF
} = require("./createSummaryPDF");

const {
    createBibliographyPDF
} = require("./createBibliographyPDF");

const {
    calculateTableOfContentsPages
} = require("./calculateTableOfContentsPages");

const path = require("path");


// =====================================================
// สร้าง PDF
// =====================================================

function buildPdf(
    report,
    tocPageCount
) {

    const doc = new PDFDocument({
        size: "A4",
        bufferPages: true,
        margins: {
            top: 72,
            bottom: 72,
            left: 72,
            right: 72
        }
    });


    // =================================================
    // Fonts
    // =================================================

    const regularFont = path.join(
        __dirname,
        "fonts",
        "Sarabun",
        "Sarabun-Regular.ttf"
    );

    const boldFont = path.join(
        __dirname,
        "fonts",
        "Sarabun",
        "Sarabun-Bold.ttf"
    );


    // =================================================
    // หน้าปก
    // =================================================

    doc.font(boldFont)
        .fontSize(25)
        .text(
            "รายงาน",
            72,
            140,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(17)
        .text(
            `เรื่อง ${report.cover.title}`,
            72,
            190,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(boldFont)
        .fontSize(18)
        .text(
            "นำเสนอ",
            72,
            270,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(17)
        .text(
            report.cover.teacher,
            72,
            298,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(18)
        .text(
            "จัดทำโดย",
            72,
            365,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(17)
        .text(
            report.cover.student,
            72,
            393,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(17)
        .text(
            `ระดับชั้น ${report.cover.class}`,
            72,
            435,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(17)
        .text(
            `รายงานนี้เป็นส่วนหนึ่งของวิชา ${report.cover.subject}`,
            72,
            480,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(18)
        .text(
            `ภาคเรียนที่ ${report.cover.semester} ปีการศึกษา ${report.cover.year}`,
            72,
            520,
            {
                width: 451,
                align: "center"
            }
        );


    doc.font(regularFont)
        .fontSize(18)
        .text(
            report.cover.college,
            72,
            552,
            {
                width: 451,
                align: "center"
            }
        );


    // =================================================
    // คำนำ
    // =================================================

    doc.addPage();

    doc.font(boldFont)
        .fontSize(20)
        .text("คำนำ", {
            align: "center"
        });

    doc.moveDown(0.5);

    createParagraphsPDF(
        doc,
        report.preface,
        {
            fontSize: 16,
            lineGap: 3,
            indent: 30,
            align: "left"
        },
        regularFont
    );


    // =================================================
    // สารบัญ
    // =================================================

    /*
        จองหน้าสารบัญตามจำนวนที่คำนวณได้
    */

    const tocStartPage =
        doc.bufferedPageRange().start
        + doc.bufferedPageRange().count;


    for (let i = 0; i < tocPageCount; i++) {

        doc.addPage();

    }


    // =================================================
    // เนื้อหา
    // =================================================

    const toc = createBodyPDF(
        doc,
        report.sections,
        regularFont,
        boldFont
    );


    // =================================================
    // สรุป
    // =================================================

    doc.addPage();

    const summaryItem =
        createSummaryPDF(
            doc,
            report.summary,
            regularFont,
            boldFont
        );

    if (summaryItem) {
        toc.push(summaryItem);
    }


    // =================================================
    // บรรณานุกรม
    // =================================================

    doc.addPage();

    const bibliographyItem =
        createBibliographyPDF(
            doc,
            report.bibliography,
            regularFont,
            boldFont
        );

    if (bibliographyItem) {
        toc.push(bibliographyItem);
    }


    // =================================================
    // เพิ่มรายการคงที่
    // =================================================

    const constantText = [
        {
            title: "คำนำ",
            page: "ก",
            level: "main"
        },
        {
            title: "สารบัญ",
            page: "ข",
            level: "main"
        }
    ];


    toc.unshift(...constantText);


    // =================================================
    // วาดสารบัญ
    // =================================================

    for (let i = 0; i < tocPageCount; i++) {

        doc.switchToPage(
            tocStartPage + i
        );

        doc.y =
            doc.page.margins.top;


        createTableOfContents(
            doc,
            toc,
            regularFont,
            boldFont,
            i > 0
        );
    }


    // =================================================
    // เลขหน้า
    // =================================================

    addPageNumbers(
        doc,
        regularFont
    );


    return {
        doc,
        toc
    };
}


// =====================================================
// createPdf
// =====================================================

function createPdf(report) {

    // -----------------------------------------------
    // รอบแรก
    // -----------------------------------------------

    let tocPageCount = 1;


    // -----------------------------------------------
    // คำนวณจนกว่าจำนวนหน้าจะนิ่ง
    // -----------------------------------------------

    for (let i = 0; i < 5; i++) {

        const result =
            buildPdf(
                report,
                tocPageCount
            );


        const newTocPageCount =
            calculateTableOfContentsPages(
                result.doc,
                result.toc,
                path.join(
                    __dirname,
                    "fonts",
                    "Sarabun",
                    "Sarabun-Regular.ttf"
                ),
                path.join(
                    __dirname,
                    "fonts",
                    "Sarabun",
                    "Sarabun-Bold.ttf"
                )
            );


        console.log(
            `TOC calculation: ${tocPageCount} -> ${newTocPageCount}`
        );


        // -------------------------------------------
        // จำนวนหน้าไม่เปลี่ยนแล้ว
        // -------------------------------------------

        if (
            newTocPageCount === tocPageCount
        ) {

            return result.doc;

        }


        // -------------------------------------------
        // ต้องคำนวณใหม่
        // -------------------------------------------

        tocPageCount =
            newTocPageCount;
    }


    throw new Error(
        "ไม่สามารถคำนวณจำนวนหน้าสารบัญให้คงที่ได้"
    );
}


module.exports = {
    createPdf
};