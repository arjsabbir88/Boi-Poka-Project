const getStoreBook =()=>{
    const getStoreBook = localStorage.getItem('readList');

    if(getStoreBook){
        const storedBookData = JSON.parse(getStoreBook);
        return storedBookData;
    }else{
        return [];
    }
}

const addToStoreDB =(id)=>{
    const storedBook = getStoreBook();

    if(storedBook.includes(id)){
        alert("Your book is already exit");
    }else{
        storedBook.push(id)
        const storData = JSON.stringify(storedBook);
        localStorage.setItem("readList", storData);
    }
}

export {addToStoreDB};