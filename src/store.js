import { create } from 'zustand'

import PocketBase from 'pocketbase';

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL
if(!pocketbaseUrl) {
    throw new Error('VITE_POCKETBASE_URL is required.')
}
export const pb = new PocketBase(pocketbaseUrl);

export const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  customization: {},
  fetchCategories: async () => {
    const categories = await pb.collection('CustomizationGroups').getFullList({
        sort: '+position',
        
    });
    
    const assets = await pb.collection('CustomizationAssets').getFullList({
        sort: '-created',
    });

    const customization = {};    

    categories.forEach((category)=>{
        category.assets = assets.filter(asset => asset.group === category.id);
        customization[category.name] = {};
    })
    set({categories, currentCategory: categories[0], assets, customization})
    console.log(customization)
  },
  setCurrentCategory: (category) => { set({currentCategory:category}) },
  changeAsset: (category,asset) => 
    set((state)=>({
      customization: {
        ...state.customization,
        [category]: {
          ...state.customization[category],
          asset
        },
      },
    })),
}))
