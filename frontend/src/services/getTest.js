export default async function getTest(){
    const response = await fetch("http://localhost:3000/api/reports/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "ระบบจัดการฐานข้อมูล",
            teacher: "อาจารย์ ภาณี มณีชม",
            student: "นางสาว นลิศา รวงผึ้ง",
            class: "ปวส. 1/3-1",
            subject: "ระบบจัดการฐานข้อมูล",
            semester: "1",
            year: "2569",
            college: "วิทยาลัยเทคโนโลยี"
        })
    });

    if(!response.ok){
        throw new Error("fetch fail");
    }

    return response.json();
}

