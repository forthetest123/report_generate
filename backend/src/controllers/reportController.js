const { createReport } = require("../engine/reportEngine");
const { generateDocx } = require("../services/generateDocx");

async function generateReport(req, res) {

    try {

        const report = createReport(req.body);

        const fileBuffer = await generateDocx(report);

        res.set({
            "Content-Type":
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

            "Content-Disposition":
                'attachment; filename="report.docx"'
        });

        res.send(fileBuffer);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "ไม่สามารถสร้างรายงานได้"
        });
    }
}

module.exports = {
    generateReport
};