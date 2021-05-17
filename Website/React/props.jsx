// custom components can take their custom props

// the argument to your component is the props object
export default function PropComponent({ name, age }) {
    return (
        <h2>
            {/* You can use {value} to interpolate a value into your JSX */}
            Your name is {name} and your age is {age}
        </h2>
    );
}

// pretend this is another file:
export default function App() {
    return (
        <div>
            <p>This is the main App component</p>
            <PropComponent name="aero" age="69" />
        </div>
    );
}
