import React from "react";

export function InfoLine(Name){
    return(
        // <div><h2>This is InfoLine</h2></div>
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        Author Name
                    </div>
                </div>
            </div>
            <div className="mt-0 flex lg:mt-0 lg:ml-4">
               
                <span className="sm:ml-1 mr-2">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white-50 hover:bg-gray-200 focus:outline-none active:bg-gray-300">
                    <svg class="w-5 h-4" fill="none" stroke="currentColor" viewBox="5 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        Share
                    </button>
                </span>
            </div>
        </div>

    )
    
}

