import { useState , useEffect } from "react";
import { getStorageData , setStorageData } from "../../localstorage/storageData";

function ReportForm({ sendCover, onCoverChange }) {

    const [cover, setCover] = useState(()=>{
        return getStorageData("cover") ??  sendCover
    });

    useEffect(() => {
        onCoverChange(cover);
    }, [cover, onCoverChange]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCover(prev => {
            const newCover = {
                ...prev,
                [name]: value
            };

            setStorageData("cover", newCover);

            return newCover;
        });
    };


    return (
        <form>

            <h2>ข้อมูลหน้าปก</h2>

            <input
                name="title"
                value={cover.title}
                onChange={handleChange}
                placeholder="ชื่อเรื่อง"
            />

            <input
                name="teacher"
                value={cover.teacher}
                onChange={handleChange}
                placeholder="อาจารย์"
            />

            <input
                name="student"
                value={cover.student}
                onChange={handleChange}
                placeholder="ผู้จัดทำ"
            />

            <input
                name="class"
                value={cover.class}
                onChange={handleChange}
                placeholder="ระดับชั้น"
            />

            <input
                name="subject"
                value={cover.subject}
                onChange={handleChange}
                placeholder="ชื่อวิชา"
            />

            <input
                name="semester"
                value={cover.semester}
                onChange={handleChange}
                placeholder="ภาคเรียน"
            />

            <input
                name="year"
                value={cover.year}
                onChange={handleChange}
                placeholder="ปีการศึกษา"
            />

            <input
                name="college"
                value={cover.college}
                onChange={handleChange}
                placeholder="วิทยาลัย"
            />

        </form>
    );
}

export default ReportForm;