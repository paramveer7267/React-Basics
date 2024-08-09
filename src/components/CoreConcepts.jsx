import { CORE_CONCEPTS } from "../data"
import  Components  from "./Components"
import Section from "./Section"
const CoreConcepts = () => {
    return (
        <Section title ="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((item) => (<Components key={item.title} {...item} />))}
                {/* <Components {...CORE_CONCEPTS[0]} />
            <Components {...CORE_CONCEPTS[1]} />
            <Components {...CORE_CONCEPTS[2]} />
            <Components {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </Section>
    )
}

export default CoreConcepts
