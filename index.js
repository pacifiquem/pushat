/*
@params:
    array: the array you want to manipulate
    index: where you want to add an element. Start counting from 0
    element: new value you want to add into an array.
*/

const _pushat = (array, index, element) => {

    let i;
    for(i=array.length-1; i>=index; i--) {
        array[i+1] = array[i];
    }

    array[index] = element;

    return array;
}

module.exports = _pushat
