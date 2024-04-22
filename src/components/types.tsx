export type ExperienceType = {
    id: number,
    position: String,
    location?: String,
    desc: String,
    image: string,
    dateFrom?: Date,
    dateTo?: Date,
}

export type ProjectType = {
    id: number,
    title: String,
    desc: String,
    date: Date,
    image: string,
    languages: String[],
    github: String,
    link: String,
}