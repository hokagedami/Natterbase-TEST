




module.exports = removeAttribute = (data, attribute) => {
    //if ()
    /*check if data and attribute are valid arguments*/
    if (data.hasOwnProperty(attribute)) {
        delete data[attribute];
        return data;
    }
    else {
        return 'attribute not found';
    }
};