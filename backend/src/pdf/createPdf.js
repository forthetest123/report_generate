const PDFDocument = require("pdfkit");
const { createParagraphsPDF } = require("./createParagraphsPDF");
const { createBodyPDF } = require("./createBodyPDF");
const { addPageNumbers } = require("./addPageNumbers");
const {
    createTableOfContents
} = require("./createTableOfContents");

const {
    createSummaryPDF
} = require("./createSummaryPDF");

const {
    createBibliographyPDF
} = require("./createBibliographyPDF");

const path = require("path");
const { subscribe } = require("diagnostics_channel");

function createPdf(report) {

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

    // =========================
    // Fonts
    // =========================

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


    // =========================
    // หน้าปก
    // =========================

    // รายงาน
    doc.font(boldFont)
        .fontSize(25)
        .text("รายงาน", 72, 140, {
            width: 451,
            align: "center"
        });


    // เรื่อง
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


    // นำเสนอ
    doc.font(boldFont)
        .fontSize(18)
        .text("นำเสนอ", 72, 270, {
            width: 451,
            align: "center"
        });


    // อาจารย์
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


    // จัดทำโดย
    doc.font(regularFont)
        .fontSize(18)
        .text("จัดทำโดย", 72, 365, {
            width: 451,
            align: "center"
        });


    // ผู้จัดทำ
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


    // ระดับชั้น
    // ระดับชั้น
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

    // วิชา
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

    // ภาคเรียน
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

    // วิทยาลัย
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



    // =========================
    // หน้าถัดไป
    // =========================




    // =========================
    // คำนำ
    // =========================

    doc.addPage();

    // หัวข้อ
    doc
        .font(boldFont)
        .fontSize(20)
        .text("คำนำ", {
            align: "center"
        });

    doc.moveDown(0.5);

    // เนื้อหา
    createParagraphsPDF(doc, report.preface, {
        fontSize: 16,
        lineGap: 3,
        indent: 30,
        align: "left"
    },regularFont);

    doc.addPage();

    // เริ่มสารบัญ

    const tocRange =
        doc.bufferedPageRange();

    const tocPage =
        tocRange.start + tocRange.count - 1;
    
    // จบสารบัญ

    // =========================
    // เนื้อหา
    // =========================

    doc.addPage();

    const toc = createBodyPDF(
        doc,
        report.sections,
        regularFont,
        boldFont
    );

    // =========================
    // สรุป
    // =========================

    doc.addPage();

    const summaryItem = createSummaryPDF(
        doc,
        report.summary,
        regularFont,
        boldFont
    );

    if(summaryItem){
        toc.push(summaryItem);
    }


    // =========================
    // บรรณานุกรม
    // =========================

    doc.addPage();

    const bibliographyItem = createBibliographyPDF(
        doc,
        report.bibliography,
        regularFont,
        boldFont
    );

    if(bibliographyItem){
        toc.push(bibliographyItem);
    }


    // =========================
    // เลขหน้า
    // =========================

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


    doc.switchToPage(tocPage);

    doc.y = doc.page.margins.top;

    createTableOfContents(
        doc,
        toc,
        regularFont,
        boldFont
    );

    addPageNumbers(doc, regularFont);


    return doc;
}

module.exports = {
    createPdf
};