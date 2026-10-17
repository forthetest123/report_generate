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
    <form className="form-card">

        <h2>ข้อมูลหน้าปก</h2>

        <div className="form-group">
            <label htmlFor="title">ชื่อเรื่อง</label>
            <input
                id="title"
                className="form-input"
                name="title"
                value={cover.title}
                onChange={handleChange}
                placeholder="กรอกชื่อเรื่อง"
            />
        </div>

        <div className="form-group">
            <label htmlFor="teacher">อาจารย์</label>
            <input
                id="teacher"
                className="form-input"
                name="teacher"
                value={cover.teacher}
                onChange={handleChange}
                placeholder="กรอกชื่ออาจารย์"
            />
        </div>

        <div className="form-group">
            <label htmlFor="student">ผู้จัดทำ</label>
            <input
                id="student"
                className="form-input"
                name="student"
                value={cover.student}
                onChange={handleChange}
                placeholder="กรอกชื่อผู้จัดทำ"
            />
        </div>

        <div className="form-group">
            <label htmlFor="class">ระดับชั้น</label>
            <input
                id="class"
                className="form-input"
                name="class"
                value={cover.class}
                onChange={handleChange}
                placeholder="กรอกระดับชั้น"
            />
        </div>

        <div className="form-group">
            <label htmlFor="subject">ชื่อวิชา</label>
            <input
                id="subject"
                className="form-input"
                name="subject"
                value={cover.subject}
                onChange={handleChange}
                placeholder="กรอกชื่อวิชา"
            />
        </div>

        <div className="form-group">
            <label htmlFor="semester">ภาคเรียน</label>
            <input
                id="semester"
                className="form-input"
                name="semester"
                value={cover.semester}
                onChange={handleChange}
                placeholder="กรอกภาคเรียน"
            />
        </div>

        <div className="form-group">
            <label htmlFor="year">ปีการศึกษา</label>
            <input
                id="year"
                className="form-input"
                name="year"
                value={cover.year}
                onChange={handleChange}
                placeholder="กรอกปีการศึกษา"
            />
        </div>

        <div className="form-group">
            <label htmlFor="college">วิทยาลัย</label>
            <input
                id="college"
                className="form-input"
                name="college"
                value={cover.college}
                onChange={handleChange}
                placeholder="กรอกชื่อวิทยาลัย"
            />
        </div>

    </form>
);
}

export default ReportForm;