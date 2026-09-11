const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    PageBreak,
    Header,
    PageNumber
} = require("docx");

function createParagraphs(text) {

    const paragraphs = text
        .split(/\n\s*\n/)
        .map(text => text.trim())
        .filter(Boolean);

    return paragraphs.map(text => {
        return new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: {
                line: 276
            },
            indent: {
                firstLine: 720
            },
            children: [
                new TextRun({
                    text,
                    size: 28
                })
            ]
        });
    });
}

function createPageNumberHeader(pageNumber) {
    return new Header({
        children: [
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                    new TextRun({
                        text: pageNumber,
                        size: 28
                    })
                ]
            })
        ]
    });
}

module.exports = {
    createParagraphs,
    createPageNumberHeader
};