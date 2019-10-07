



module.exports = validate = (data, rules) => {
    if (Object.prototype.toString.call(data) !== "[object Array]" && Array.isArray(rules)) {
        const failed = rules.filter(rule => !data.hasOwnProperty(rule));
        return failed.length > 0 ? failed : "valid";
    }
    else {
        return {
            error: "invalid data or rules provided"
        }
    }
};
