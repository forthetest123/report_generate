const express = require("express");

const router = express.Router();

const {generateReport} = require("../controllers/reportController");
const {generatePDFReport} = require("../controllers/reportPDFController")

router.post("/generate",generateReport);
router.post("/generatepdf", generatePDFReport);


module.exports = router;