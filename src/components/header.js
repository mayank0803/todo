import React, { useState } from "react";
import { Button } from "./button";
export const Header = () => {
  const [count, setCount] = useState(0);

  const increment=()=> {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <Button increase={increment} decrease={decrement} value={count}/>
      {/* <Button counter={decrement} name={"decrease"} value={count}/> */}
    </div>
  );
};
