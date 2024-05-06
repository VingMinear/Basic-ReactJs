import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="home">
            <h1>Home</h1>
            <hr style={{
                marginTop: '10px',
                marginBottom: '10px'
            }} />
            <span>
                <p>This is the home page {count}</p>
                <button style={{
                    backgroundColor: '#329da8',
                    color: 'white',
                    marginTop: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: 'none'
                }} onClick={onClick}> Click Me </button>
            </span>
        </div>
    );
}

export default Home;