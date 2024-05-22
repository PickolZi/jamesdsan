import TypeAnimate from "./framer_components/typeAnimate.component";
import ScrollDownIndicator from "./framer_components/scrollDownIndicator.component";


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
            {/* <ScrollDownIndicator /> */}
        </section>
    )
}

export default Title;