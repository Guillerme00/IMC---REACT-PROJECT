import { useState } from "react";
import Program from "./program/index.jsx";
import Table from "./tables/index.jsx"

export default function App() {
  const [BM, setBM] = useState(0);

  return (
    <>
    <Program setBM={setBM}/>
    <Table BM={BM}/>
    </>
  )
}
