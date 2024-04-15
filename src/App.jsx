const App = () => {


  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="w-full h-10 flex justify-center items-center bg-violet-200 border-violet-600 border-2 rounded-md my-4 p-2">
        <p className="text-center font-mono font-extrabold">a div</p>
      </div>
      {/* Layout */}
      <div className="fixed w-10 h-10 bg-red-500 top-0">

      </div>
      <div className="flex justify-around space-x-12">
        <div className="h-16 w-16 rounded-full bg-blue-600"></div>
        <div className="h-16 w-16 rounded-full bg-blue-600"></div>
        <div className="h-16 w-16 rounded-full bg-blue-600"></div>
        <div className="h-16 w-16 rounded-full bg-blue-600"></div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
      </div>
      <div className="hidden md:block">
        <p>I will appear for resolution greater 768</p>
      </div>
      <div className="hidden max-md:block">
        <p>I will appear for resolution less than 768</p>
      </div>
      <button className="my-2 mx-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
        Click Me
      </button>
      <ul>
        <li className="p-2 ">Item 1</li>
      </ul>
      {/* Thene dark: */}
      <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5">
        <h3 className="text-base font-medium tracking-tight text-slate-900">This is a text element</h3>
        <p className="mt-2 text-sm text-slate-500">This is an even longer p tag element</p>
        <button 
          className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md hover:bg-blue-200" 
          id="toggleDark"

        >Toggle Dark Mode</button>
      </div>
    </main>
  )
}

export default App
