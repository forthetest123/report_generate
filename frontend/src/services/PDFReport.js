export default async function PDFReport(value){

    console.log(value.cover.title)
    const response = await fetch("http://localhost:3000/api/reports/generatepdf", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    });

    return response.blob();
}

