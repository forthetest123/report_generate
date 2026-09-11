function checkPageSpace(doc, requiredHeight) {

    const bottomLimit =
        doc.page.height - doc.page.margins.bottom;

    const remainingHeight =
        bottomLimit - doc.y;

    if (remainingHeight < requiredHeight) {
        doc.addPage();
        return true;
    }

    return false;
}

module.exports = {
    checkPageSpace
};