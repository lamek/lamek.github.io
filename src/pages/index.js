import React from "react"
import { Link } from "gatsby"
import SomeHeader from "../components/header"


export default function Home() {
  return (
    <div style={{ color: `orange` }}>
      <Link to="/contact/">Contact</Link>
      <SomeHeader headerText="Hello Kevin" />
      <p>What a world we live in</p>
      <img src="https://source.unsplash.com/random/400x200" alt="some-random" />
    </div>
  );
}
