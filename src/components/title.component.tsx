import TypeAnimate from "./framer_components/typeAnimate.component";


const Title = () => {

    const typingTexts = [
        "Full Stack Developer",
        "Undergraduate Computer Science Student",
        "Continuous Learner"
    ]

    return (
        <section>
            <h1 className="text-4xl">James San</h1>
            <TypeAnimate typingTexts={typingTexts} />
        </section>
    )
}

export default Title;