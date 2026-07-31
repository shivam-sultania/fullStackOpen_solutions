export interface CoursePart {
    name: string,
    exercises: number,
    id: number,
}

export interface CourseDesc {
    id:number,
    name:string,
    parts: CoursePart[],
}