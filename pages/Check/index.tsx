import React, { useEffect } from "react";

export default function Check() {
  const [text, setText] = React.useState("");
  useEffect(() => {
    fetch("https://proxy-server-steel-nu.vercel.app/check", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setText(data);
      });
  }, []);

  return <h1>{text}</h1>;
}
