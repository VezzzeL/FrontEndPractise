import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.jsx";
import Hobbies from "./Hobbies.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <div>
      <Heading name="Sarah Smith" />
      <Hobbies best="Kayaking" outdoor="Running" indoor="Chess" />
      <Contact greeting="Contact me" callToAction="Schedule a meeting" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
