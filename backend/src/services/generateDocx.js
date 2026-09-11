const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    PageBreak
} = require("docx");

const {createParagraphs , createPageNumberHeader} = require("./createParagraphs");

async function generateDocx(report) {

    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: {
                        font: "TH Sarabun New",
                        size: 32
                    }
                }
            }
        },
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 1440,
                            bottom: 1440,
                            left: 1440,
                            right: 1440
                        }
                    }
                },

                children: [

                    // =========================
                    // หน้าปก
                    // =========================

                    // ว่างด้านบน

                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),


                    // =========================
                    // รายงาน
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "รายงาน",
                                bold: true,
                                size: 50
                            })
                        ]
                    }),

                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),


                    // =========================
                    // เรื่อง
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: `เรื่อง ${report.cover.title}`,
                                size: 34
                            })
                        ]
                    }),


                    // ว่าง 2 บรรทัด
                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),

                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),


                    // =========================
                    // นำเสนอ
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "นำเสนอ",
                                bold: true,
                                size: 36
                            })
                        ]
                    }),


                    // อาจารย์
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: report.cover.teacher,
                                size: 34
                            })
                        ]
                    }),


                    // ว่าง 2 บรรทัด
                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),

                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),


                    // =========================
                    // จัดทำโดย
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "จัดทำโดย",
                                size: 36
                            })
                        ]
                    }),


                    // ผู้จัดทำ
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: report.cover.student,
                                size: 34
                            })
                        ]
                    }),


                    // ว่าง 1 บรรทัด
                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),

                    // =========================
                    // ระดับชั้น
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: `ระดับชั้น ${report.cover.class}`,
                                size: 34
                            })
                        ]
                    }),


                    // ว่าง 1 บรรทัด
                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),

                    // =========================
                    // วิชา
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text:
                                    `รายงานนี้เป็นส่วนหนึ่งของวิชา ` +
                                    `${report.cover.subject}`,
                                size: 34
                            })
                        ]
                    }),


                    // ว่าง 1 บรรทัด
                    new Paragraph({
                        spacing: {
                            line: 360
                        }
                    }),


                    // =========================
                    // ภาคเรียน
                    // =========================

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text:
                                    `ภาคเรียนที่ ${report.cover.semester} ` +
                                    `ปีการศึกษา ${report.cover.year}`,
                                size: 36
                            })
                        ]
                    }),


                    // วิทยาลัย
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: report.cover.college,
                                size: 36
                            })
                        ]
                    }),


                    // =========================
                    // จบหน้าปก
                    // =========================
                    
                ]
            },
            {
                // =========================
                // คำนำ
                // =========================

                properties: {
                    page: {
                        margin: {
                            top: 1440,
                            bottom: 1440,
                            left: 1440,
                            right: 1440
                        }
                    }
                },

                headers: {
                    default: createPageNumberHeader('ก')
                },

                children: [

                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 360
                        },
                        children: [
                            new TextRun({
                                text: "คำนำ",
                                bold: true,
                                size: 36
                            })
                        ]
                    }),

                    ...createParagraphs(report.preface)

                ]
                // =========================
                // จบคำนำ
                // =========================
            },
            {
                // =========================
                // สารบัญ
                // =========================

                properties: {
                    page: {
                        margin: {
                            top: 1440,
                            bottom: 1440,
                            left: 1440,
                            right: 1440
                        }
                    }
                },

                headers: {
                    default: createPageNumberHeader("ข")
                },

                children: [

                    // หัวข้อสารบัญ
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 360
                        },
                        children: [
                            new TextRun({
                                text: "สารบัญ",
                                bold: true,
                                size: 36
                            })
                        ]
                    }),

                    // รายการสารบัญ
                    new Paragraph({
                        spacing: {
                            line: 360
                        },
                        tabStops: [
                            {
                                type: "right",
                                position: 9360
                            }
                        ],
                        children: [
                            new TextRun({
                                text: "สารบัญ\tข",
                                size: 32
                            })
                        ]
                    }),

                    new Paragraph({
                        spacing: {
                            line: 360
                        },
                        tabStops: [
                            {
                                type: "right",
                                position: 9360
                            }
                        ],
                        children: [
                            new TextRun({
                                text: "1. จริยธรรมคอมพิวเตอร์\t1",
                                size: 32
                            })
                        ]
                    }),

                    new Paragraph({
                        spacing: {
                            line: 360
                        },
                        tabStops: [
                            {
                                type: "right",
                                position: 9360
                            }
                        ],
                        children: [
                            new TextRun({
                                text: "2. กฎหมายคอมพิวเตอร์\t2",
                                size: 32
                            })
                        ]
                    }),

                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: {
                            line: 360
                        },
                        children: [
                            new TextRun({
                                text: "3. ความสัมพันธ์ระหว่างจริยธรรมฯ        3",
                                size: 32
                            })
                        ]
                    }),

                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: {
                            line: 360
                        },
                        children: [
                            new TextRun({
                                text: "4. ข้อเสนอแนะ                            4",
                                size: 32
                            })
                        ]
                    }),

                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: {
                            line: 360
                        },
                        children: [
                            new TextRun({
                                text: "สรุป                                      5",
                                size: 32
                            })
                        ]
                    }),

                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: {
                            line: 360
                        },
                        children: [
                            new TextRun({
                                text: "บรรณานุกรม",
                                size: 32
                            })
                        ]
                    })
                ]
            }
        ]
    });

    return Packer.toBuffer(doc);
}

module.exports = {
    generateDocx
};
