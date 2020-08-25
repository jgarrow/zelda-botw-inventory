export const fillGrid = (dataArray, itemsPerPage = 20) => {
    const emptyItem = {
        name: null,
        icon: null,
        value: null,
        description: null
        // category: categoryName // can probably remove this
    };

    // fill any empty spots with the `emptyItem` object until array length matches `itemsPerPage`
    const itemsArray = dataArray.concat(new Array(itemsPerPage - dataArray.length).fill(emptyItem));

    return itemsArray;
}