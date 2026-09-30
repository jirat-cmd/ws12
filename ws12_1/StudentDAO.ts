import { BaseDAO } from "./BaseDAO";
import { Student } from "./Student";

export class StudentDAO extends BaseDAO {
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                studentcode TEXT NOT NULL,
                fullName TEXT NOT NULL,
                gpa TEXT NOT NULL
            )
        `);
    }

    public insert(studentCode: string, fullName: string, gpa: number): boolean {
        const stmt = this.db.prepare(
            "INSERT INTO students (studentcode, fullName, gpa) VALUES (?, ?, ?)");
        const result = stmt.run(studentCode, fullName, gpa);
        return result.changes > 0;
    }

    public findAll(): Student [] {
        const stmt = this.db.prepare("SELECT * FROM students");
        const rows = stmt.all() as { id: number; studentcode: string; fullName: string; gpa: number }[];
        return rows.map(row => new Student(row.id, row.studentcode, row.fullName, row.gpa));
    }


}