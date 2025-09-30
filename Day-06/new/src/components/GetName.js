import {useState} from "react"; 

function GetName(params) {
    const [name, setName] = useState();

    /* another two text boxes*/ 
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    /*Calculating Total count of characters*/
    const totalCount = text1.length + text2.length;
    return(
        <>
         {/* Input field to capture user text */}
        Your Name:<input
        type="text"
        value={name} // Controlled input: value tied to state
        onChange={(e) => setName(e.target.value)} // Update state on input change
      />

      {/* Optional button (currently commented out) */}
      {/* <button onClick={() => alert(name)}>Get Text</button> */}

      {/* Display the name entered */}
      <h1>{name}</h1>

      <h2>Character Count Calculator</h2>

{/* First text box */}
<input
  type="text"
  placeholder="Enter first text"
  value={text1}
  onChange={(e) => setText1(e.target.value)}
/> 
<br></br>

 {/* Second text box */}
 <input
        type="text"
        placeholder="Enter second text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />

      {/* Display total character count */}
      <h3>Total Characters: {totalCount}</h3>
    </>

    );
}

export default GetName;

