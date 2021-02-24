import React from "react"
import { Link } from "gatsby"
import SomeHeader from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <SomeHeader headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    )
}