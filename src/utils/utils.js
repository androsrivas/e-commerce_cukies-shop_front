export function stringToUpperCase (str) {
    const words = str.split(" ");
    
    const wordsUpperCase = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return wordsUpperCase.join(" ");
};