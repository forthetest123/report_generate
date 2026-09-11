const {createPdf} = require("../pdf/createPdf")

async function generatePDFReport(req, res){

    try {

        const report = req.body;

        const pdf = createPdf(report);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
            "Content-Disposition",
            "inline; filename=report.pdf"
        );

        pdf.pipe(res);

        pdf.end();

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "สร้าง PDF ไม่สำเร็จ"
        });

    }

}

module.exports = {
    generatePDFReport
};