export type ExperienceType = {
    id: number,
    title: String,
    desc: String,
    image: String,
    dateFrom?: Date,
    dateTo: Date,
}

export type ProjectType = {
    id: number,
    title: String,
    desc: String,
    date: Date,
    image: String,
    languages: String[],
    github: String,
    link: String,
}