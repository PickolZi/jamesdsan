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
    subtitle: String,
    desc: String,
    date: Date,
    image: string,
    languages: String[],
    github: string,
    link: string,
}