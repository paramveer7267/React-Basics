import { useState } from 'react'
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';
const Examples = () => {
    const [sTopic, setsTopic] = useState();
    function handleClick(sButton) {
        setsTopic(sButton)
        console.log(sButton)
    }

    let tabContent = <p>Please select a topic</p>;

    if (sTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[sTopic].title}</h3>
            <p>{EXAMPLES[sTopic].description}</p>
            <pre><code>{EXAMPLES[sTopic].code}</code></pre>
        </div>)
    }
    return (
        <Section title="Examples" id="examples">
            
                <Tabs
                buttons={<>
                    <TabButton isSelected={sTopic === 'components'} onClick={() => handleClick("components")}>Components</TabButton>
                    <TabButton isSelected={sTopic === 'jsx'} onClick={() => handleClick("jsx")}>Jsx</TabButton>
                    <TabButton isSelected={sTopic === 'props'} onClick={() => handleClick("props")}>Props</TabButton>
                    <TabButton isSelected={sTopic === 'state'} onClick={() => handleClick("state")}>State</TabButton>
                </>}>
                    {tabContent}
                </Tabs>
        </Section>
    )
}

export default Examples


