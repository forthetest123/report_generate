function createReport(data) {
    return {
        cover: {
            title: data.title || "",
            teacher: data.teacher || "",
            student: data.student || "",
            class: data.class || "",
            subject: data.subject || "",
            semester: data.semester || "",
            year: data.year || "",
            college: data.college || ""
        },

        preface: data.preface || "",

        chapters: data.chapters || [],

        summary: data.summary || "",

        references: data.references || []
    };
}

module.exports = {
    createReport
};