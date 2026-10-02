export function getStorageData(key){
    const data = localStorage.getItem(key) ;
    return data ? JSON.parse(data) : null;
}

export function setStorageData(key,report){
    localStorage.setItem(key,JSON.stringify(report));
}