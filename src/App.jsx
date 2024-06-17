import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import scenarioData from './data.json'; // assert {type: 'json'};


function App() {
  const [count, setCount] = useState(0)
  const [currentScenarioIndex, setCurrentScenario] = useState(0)

  const handleScenarioMenuClick = () => {
    setCurrentScenario(i)
  }

  const currentScenario = scenarioData.data[currentScenarioIndex];

  console.log(scenarioData)

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      <div className="col-span-2  p-4 rounded bg-zinc-900">
        {scenarioData.data.map((scenario,i)=>(
          <div onClick={()=>handleScenarioMenuClick(i)}>
            {i}
          </div>
        ))}


      </div>
      <div className="col-span-4  p-4 rounded bg-zinc-900">
        <div className="p-6 rounded bg-zinc-700 mb-4 flex flex-col space-y-4">
          <p className="">
            <span className="font-bold">char1_role: </span>
            {currentScenario.char1_role}
            <span className="font-bold"> char1_gender: </span>
            {currentScenario.char1_gender}
          </p>
          <p className="">
            <span className="font-bold">char2_role: </span>
            {currentScenario.char2_role}
            <span className="font-bold"> char2_gender: </span>
            {currentScenario.char2_gender}
          </p>
          <p className="">
            <span className="font-bold">Mutual relationships: </span>
            {currentScenario.mutual_relationships.join(', ')}
          </p>
          <p className="">
            <span className="font-bold">accidental reveal: </span>
            {currentScenario.accidental_reveal}
          </p>
          <p className="">
            <span className="font-bold">reveal: </span>
            {currentScenario.reveal}
          </p>
        </div>

        <div className="p-6 rounded bg-zinc-700 mb-4 flex flex-col space-y-4">
          <div>
            <p>1: Exposition:</p>
            <textarea className="textarea textarea-bordered" placeholder="exposition"></textarea>
          </div>
          <div className="p-6 rounded bg-zinc-900 flex flex-col space-y-4">
            <p>2: Rising Action: (accidental_reveal)</p>

            <label className="input input-bordered flex items-center gap-2">
              location
              <input type="text" className="grow" placeholder="kitchen" />
            </label>

            <textarea className="textarea textarea-bordered" placeholder="rising action"></textarea>

            <textarea className="textarea textarea-bordered" placeholder="real time reaction"></textarea>

            <textarea className="textarea textarea-bordered" placeholder="reaction"></textarea>
 
          </div>

          <div className="p-6 rounded bg-zinc-900 flex flex-col space-y-4">
            <p>3: Pivotal Scene (reveal)</p>

            <label className="input input-bordered flex items-center gap-2">
              location
              <input type="text" className="grow" placeholder="kitchen" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              interval
              <input type="text" className="grow" placeholder="next week" />
            </label>

            <textarea className="textarea textarea-bordered" placeholder="pivotal scene"></textarea>

            <textarea className="textarea textarea-bordered" placeholder="real time reaction"></textarea>

            <textarea className="textarea textarea-bordered" placeholder="proposition"></textarea>
 
          </div>
          <div className="p-6 rounded bg-zinc-900 flex flex-col space-y-4">
            <p>4: Falling action</p>

            <label className="input input-bordered flex items-center gap-2">
              location
              <input type="text" className="grow" placeholder="kitchen" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              interval
              <input type="text" className="grow" placeholder="next week" />
            </label>

            <textarea className="textarea textarea-bordered" placeholder="reveal"></textarea>

            <textarea className="textarea textarea-bordered" placeholder="real time reaction"></textarea>

            <textarea className="textarea textarea-bordered" placeholder="proposition"></textarea>
 
          </div>

          <div className="p-6 rounded bg-zinc-900 flex flex-col space-y-4">
            <p>Story Theme</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
