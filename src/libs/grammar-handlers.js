export default function rewriteCorrectly(word=''){
    
    if(word){
        word = word.toLowerCase()
        word = word.charAt(0).toUpperCase() + word.slice(1,word.length)
        return word;
    }
    return ''
}