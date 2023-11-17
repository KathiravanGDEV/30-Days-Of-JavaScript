function getExtension(filename) {
    let index = filename.lastIndexOf(".");
    if(index !== -1 && index !== filename.length-1) {
        return filename.slice(index + 1);
    }
    else
    return "";

}

console.log(getExtension("index.html"))
console.log(getExtension("script.js"))