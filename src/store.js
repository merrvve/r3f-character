import { create } from 'zustand'

import PocketBase from 'pocketbase';

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL
if(!pocketbaseUrl) {
    throw new Error('VITE_POCKETBASE_URL is required.')
}
const pb = new PocketBase(pocketbaseUrl);

export const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  fetchCategories: async () => {
    const categories = await pb.collection('CustomizationGroups').getFullList({
        sort: '+position',
        
    });
    
    const assets = await pb.collection('CustomizationAssets').getFullList({
        sort: '-created',
    });

    console.log('Fetched categories:', categories); 
    set({categories, currentCategory: categories[0], assets})
  },
  setCurrentCategory: (category) => { set({currentCategory:category}) }
}))
