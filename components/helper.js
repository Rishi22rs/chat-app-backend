exports.doesExist = (list, name) => {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) return true;
  }
  return false;
};
