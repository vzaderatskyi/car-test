export const nestedFilter = (targetArray, filters) => {
  let filterKeys = Object.keys(filters);
  return targetArray.filter((eachObj) => {
    return filterKeys.every((eachKey) => {
      if (!filters[eachKey].length) {
        return true; 
      }
      return filters[eachKey].includes(eachObj[eachKey]);
    });
  });
};
