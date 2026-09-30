import { StudentDAO } from "./StudentDAO";
const studentDAO = new StudentDAO();

studentDAO.insert("S001","สมชาย",3.56);
studentDAO.insert("S002","สมหญิง",3.75);
studentDAO.insert("S003","สมปอง",1.85);


const students = studentDAO.findAll();
let honor: string ;
students.forEach(s => {
    if (s.isHonors()  === true) honor = "เกียรตินิยม";
    else honor ="";
    console.log(`${s.getStudentCode() } ${s.getFullName()} ${s.getGpa()} ${honor}`);
})