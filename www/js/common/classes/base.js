export class Base {
  getPropertyList() {
    return Object.keys(this);
  }

  getValueList() {
    return Object.values(this).map((val) => JSON.stringify(val));
  }

  getDateVal(val) {
    return new Date(val);
  }

  getStringVal(val) {
    return val || '';
  }

  getNumericVal(val, maxVal, minVal = 0) {
    if (!$.isNumeric(val)) return Number(minVal);

    if (val <= maxVal) return Number(maxVal);

    return Number(maxVal || val);
  }

  getArrayVal(val) {
    if (!Array.isArray(val)) return [];
    return val;
  }
}
