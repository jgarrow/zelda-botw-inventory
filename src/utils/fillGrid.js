export const fillGrid = (dataArray, categoryName, itemsPerPage = 20) => {
    const emptyItem = {
        name: "",
        icon: "",
        value: "",
        description: "",
        category: categoryName
    };

    // fill any empty spots with the `emptyItem` object until array length matches `itemsPerPage`
    const itemsArray = dataArray.concat(new Array(itemsPerPage - dataArray.length).fill(emptyItem));

    return itemsArray;
}