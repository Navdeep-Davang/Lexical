import React from 'react'

export const ToolBar = () => {
  
  return (
  <div className=" px-4 py-2 bg-neutral-800 rounded-xl flex justify-start items-center gap-4">
   
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Undo">
        <div className="w-4 h-4 relative">
          {/* Place your undo SVG here */}
        </div>
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Redo">
        <div className="w-4 h-4 relative">
          {/* Place your redo SVG here */}
        </div>
      </button>
    </div>
  
    {/* Text Format Dropdown */}
    <div className="h-8 px-3 bg-white/20 rounded-lg flex items-center gap-2">
      <span className="text-white text-sm font-medium">Body 1</span>
      <button className="text-white" aria-label="Format Options">
        <div className="w-4 h-4 relative">
          {/* Place your dropdown SVG here */}
        </div>
      </button>
    </div>
  
    {/* Text Styling Icons */}
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Bold">
        <div className="w-4 h-4 relative">
          {/* Place your bold SVG here */}
        </div>
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Italic">
        <div className="w-4 h-4 relative">
          {/* Place your italic SVG here */}
        </div>
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Underline">
        <div className="w-4 h-4 relative">
          {/* Place your underline SVG here */}
        </div>
      </button>
    </div>
  
    {/* Highlight Dropdown */}
    <div className="relative">
      <button className="p-2 hover:bg-neutral-700 rounded-md flex items-center gap-1" aria-label="Highlight">
        <div className="w-4 h-4 relative">
          {/* Place your highlight SVG here */}
        </div>
        <div className="w-3 h-3 relative">
          {/* Place your dropdown arrow SVG here */}
        </div>
      </button>
      <div className="absolute hidden bg-white text-black rounded shadow-lg mt-2 p-2">
        {/* Highlight dropdown options */}
      </div>
    </div>
  
    {/* Text Alignment Icons */}
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Align Left">
        <div className="w-4 h-4 relative">
          {/* Place your align left SVG here */}
        </div>
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Align Center">
        <div className="w-4 h-4 relative">
          {/* Place your align center SVG here */}
        </div>
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Align Right">
        <div className="w-4 h-4 relative">
          {/* Place your align right SVG here */}
        </div>
      </button>
    </div>
  </div>  
  )

}
