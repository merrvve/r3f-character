import { useEffect } from "react";
import { useConfiguratorStore, pb } from "../store"
 
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
                            currentCategory.name === category.name ? 'text-indigo-500' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                       {category.name} 
                    </button>
                ))
            }
        </div>
        <div className="flex flex-wrap gap-2">
            {
                currentCategory?.assets.map((asset,index)=> (
                    <button
                        key={index}
                        className={`w-20 h-20 pointer-events-auto bg-gray-200 hover:opacity-100 border-2 transition-all duration-500
                            rounded-md`}
                        >
                            <img src={pb.files.getUrl(asset, asset.thumbnail)} />
                    </button>
                )

                )
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
                <div className="flex flex-col gap-6">
                    <AssetsBox />
                </div>
            </div>
            
        </main>
    )
}