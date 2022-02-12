import React, { useEffect, useState } from "react";

function App () {
  const [isDogs, setIsDogs] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((data) => {
      setIsDogs(data.message);
    })
  }, [])

  if (!isDogs) return <p>Loading...</p>;

  return (
    
      <img src={isDogs} alt="A Random Dog"/>
  
  )
}

export default App