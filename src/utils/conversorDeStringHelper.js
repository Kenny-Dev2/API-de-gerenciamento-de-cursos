module.exports = (objetoParms) => {
  for (let propriedade in objetoParms) {
    if (/Id|id/.test(propriedade)) {
      objetoParms[propriedade] = Number(objetoParms[propriedade]);
    }
  }
  return objetoParms;
};
