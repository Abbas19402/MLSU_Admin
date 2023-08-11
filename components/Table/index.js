import FacultyDocumentTable from "./Faculty/FacultyDocumentTable"
import StudentTable from "./Students/StudentTable"

const Table = {
    Student: StudentTable,
    Faculty: {
        Documents: FacultyDocumentTable
    }
}

export default Table