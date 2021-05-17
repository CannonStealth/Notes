// state can be used to create REACTive components
// an update to state can be used to re-render the component
import { useState } from "react";

// this will be a simple button that counts up when clicked
export default function StateComponent() {
    // useState is the way to create a stateful property
    // using the provided setter is the ONLY way to update state
    // 0 is set as the default value
    const [count, setCount] = useState(0);

    return (
        // button can take an onClick prop that is a function
        // you can easily define the function in the tag itself for cleaner code
        <button onClick={() => setCount(count + 1)}>
            This button was clicked {count} times
        </button>
    );
}
