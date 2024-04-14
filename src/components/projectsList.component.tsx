import Project from "./project.component";

const ProjectsList = () => {
    return (
        <section>
            <h1>Personal ProjectsList</h1>
            <Project 
                title="Nyahallo Project"
                desc="Sakura miko is one of the greastest vtubers of all time."
                date={new Date()}
                image="https://www.imageOfSakuraMiko.png"
                languages={["Javascript", "React", "HTML"]}
                github={"https://github.com/"}
                link={"https://www.jamesdsan.com"}
            />
        </section>
    )
}

export default ProjectsList;