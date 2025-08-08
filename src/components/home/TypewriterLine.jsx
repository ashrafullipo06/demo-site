
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function MyTypewriter() {
  const text = "Junior {Front-End} Web\n Developer";

  
  const [typed] = useTypewriter({
    words: [text],
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 2000,
    loop: true, 
  });

  
  const renderWithColor = (str) => {
    const start = str.indexOf("{");
    const end = str.indexOf("}") + 1;
    return str.split("").map((ch, i) => {
      if (i >= start && i < end) {
        return (
          <span key={i} style={{ color: "#93df49" }}>
            {ch}
          </span>
        );
      }
      return <span key={i}>{ch}</span>;
    });
  };

  return (
    <h2 style={{ whiteSpace: "pre" }}>
      {renderWithColor(typed)}
      <Cursor cursorStyle="_" />
    </h2>
  );
}
