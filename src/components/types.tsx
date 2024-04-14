// Typescript types.

export type ExperienceType = {
    title: String,
    desc: String,
    image: String,
    dateFrom?: Date,
    dateTo: Date,
}

export type ProjectType = {
    title: String,
    desc: String,
    date: Date,
    image: String,
    languages: String[],
    github: String,
    link: String,
}