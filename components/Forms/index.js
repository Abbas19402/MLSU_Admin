import EventManagementForm from "./Events/EventManagementForm"
import CreateNewFaculty from "./Faculty/CreateNewFaculty"
import FacultyContactForm from "./Faculty/FacultyContactForm"
import PersonalFacultyDetailsSection from "./Faculty/PersonalDetails"
import QualificationFacultyMain from "./Faculty/Qualification Section/Main"
import NotificationManagementForm from "./Notification/NotificationManagementForm"
import CreateStudentForm from "./Student/CreateStudentForm"

const Forms = {
    Student: CreateStudentForm,
    Faculty: {
        main: CreateNewFaculty,
        personal: PersonalFacultyDetailsSection,
        qualification: QualificationFacultyMain,
        contact: FacultyContactForm
    },
    Event: EventManagementForm,
    Notification: NotificationManagementForm
}

export default Forms