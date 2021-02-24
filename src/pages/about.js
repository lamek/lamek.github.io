import React from "react"
import SomeHeader from "../components/header"

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <SomeHeader headerText="About Gatsby"/>
            <SomeHeader headerText="Some other header" />
            <p>Such wow. Very React.</p>
        </div>
    )
}