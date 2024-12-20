import { useState, useCallback ,useRef, useEffect} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
   
   const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_|/";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

 

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="w-96 bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-center text-xl font-semibold text-white mb-6">
          Password Generator
        </h1>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Your password will appear here"
            className="w-full p-3 bg-gray-700 text-white text-sm rounded-md outline-none placeholder-gray-400"
          />
          <button
            onClick={handleCopy}
            className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-orange-600 focus:ring focus:ring-orange-300 focus:outline-none transition-all"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-white">Password Length</label>
            <input
              type="number"
              value={length}
              min={8}
              max={20}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-16 p-2 bg-gray-700 text-white text-sm rounded-md outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-white">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev)=> !prev)}
              className="w-5 h-5 accent-orange-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-white">Include Special Characters</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev)=> !prev)}
              className="w-5 h-5 accent-orange-500"
            />
          </div>
        </div>
        <button
          onClick={passwordGenerator}
          className="w-full mt-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-all"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
