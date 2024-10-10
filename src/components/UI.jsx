import { useEffect } from "react";
import { useConfiguratorStore } from "../store"

const AssetsBox = () => {
  const { categories, currentCategory, fetchCategories, setCurrentCategory } =
    useConfiguratorStore();
  useEffect(() => {
    fetchCategories();
  }, []);
 
  return (
    <>
    <div className="rounded-2xl drop-shadow-md p-2 bg-slate-50 gap-6 flex flex-col">
        <div className="flex items-center pointer-events-auto gap-6">
            {
                categories.map(category => (
                    <button 
                        key={category.id || category.name}
                        onClick={()=>setCurrentCategory(category)}
                        className={`transition-colors duration-300 font-medium ${
                            currentCategory.name === category.name ? 'text-slate-700' : 'text-slate-900'
                        }`}
                    >
                       {category.name} 
                    </button>
                ))
            }
        </div>
    </div>
    </>
  )
};

const DownloadButton = () => {
    return (
        <button className="px-4 py-3 pointer-events-auto">
            Download
        </button>
    )
}

export const UI = () => {
    return (
        <main className="pointer-events-none fixed z-10 inset-0 p-10">
            <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <a href="#link" className="pointer-events-auto">Logo</a>
                    <DownloadButton />
                </div>
            </div>
            <div className="flex flex-col gap-6">
               <AssetsBox />
            </div>
        </main>
    )
}