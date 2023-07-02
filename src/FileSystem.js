import { useState } from "react";

export default function FileSystem({ data }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="file-system">
      <div className="flexed">
        <h3 onClick={() => setExpand(!expand)}>
          <span>{data.type === "folder" ? "📁" : "📄"}</span> {data.name}
        </h3>
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {data?.subItems?.length > 0 ? (
          data?.subItems?.map((subitem) => {
            if (subitem.type === "files") {
              return (
                <h3 className="file-system">
                  <span>{subitem.type === "folder" ? "📁" : "📄"}</span>{" "}
                  {subitem.name}
                </h3>
              );
            }
            return <FileSystem data={subitem} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
