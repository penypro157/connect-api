class ArrayUtils {
    static findIndexByValue(array, key, value) {
        var listIndex = array.filter((item, index) => {
            return item[key] === value;
        });
        return listIndex > 0 ? listIndex[0] : -1;
    }

}
export default ArrayUtils;