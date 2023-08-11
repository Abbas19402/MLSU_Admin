import CreateNewFaculty from "./Faculty/CreateNewFaculty"
import PersonalFacultyDetailsSection from "./Faculty/PersonalDetails"
import QualificationFacultyMain from "./Faculty/Qualification Section/Main"

const Forms = {
    Faculty: {
        main: CreateNewFaculty,
        personal: PersonalFacultyDetailsSection,
        qualification: QualificationFacultyMain
    }
}

export default Forms