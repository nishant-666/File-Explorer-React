import "./styles.css";
import FileSystem from "./FileSystem";
import { mock } from "./mock";
import { useState } from "react";

export default function App() {
  const [mockData, setMockData] = useState(mock);
  return (
    <div className="App">
      {mockData?.map((data) => {
        return <FileSystem data={data} />;
      })}
    </div>
  );
}
