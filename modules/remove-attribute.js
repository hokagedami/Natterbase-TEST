




module.exports = removeAttribute = (data, attribute) => {
    if (data.hasOwnProperty(attribute)) {
        delete data[attribute];
        return data;
    }
    else {
        return 'attribute not found';
    }
};