import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>1. Counter (number)</h2>
      <p>You pressed me {count} times</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

function MyInput() {
  const [text, setText] = useState('hello');
  return (
    <div>
      <h2>2. Text field (string)</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </div>
  );
}

function MyCheckbox() {
  const [liked, setLiked] = useState(true);
  return (
    <div>
      <h2>3. Checkbox (boolean)</h2>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={e => setLiked(e.target.checked)}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);
  return (
    <div>
      <h2>4. Form (two variables)</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>Hello, {name}. You are {age}.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Counter />
      <MyInput />
      <MyCheckbox />
      <Form />
    </>
  );
}