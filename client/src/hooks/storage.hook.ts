import { useState, useCallback, useEffect } from "react";


const useStorage = (storageName:string, defaultItems:any) => {
  const [item, setItem] = useState<any>();


  const createStorage = useCallback((storageItem:any) => {
    setItem(storageItem);
    localStorage.setItem(
      storageName,
      JSON.stringify({
        storageItem
      })
    );
  },[]);

  const deleteStorage = useCallback(() => {
    setItem([]);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const item = localStorage.getItem(storageName);
    if (item) {
      const data = JSON.parse(item);
     const {storageItem} = data; 
     createStorage(storageItem); 
    }
    else{
      createStorage(defaultItems);
    }
  }, []);


  return { item, createStorage, deleteStorage };
};

export default useStorage;