const _pushat = (array, index, element) => {

    let i;
    for(i=array.length-1; i>=index; i--) {
        array[i+1] = array[i];
    }

    array[index] = element;

    return array;
}

module.exports = _pushat