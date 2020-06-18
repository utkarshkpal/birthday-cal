const hashMod = (str, buckets = 100) => integerHash(str) % buckets;

const integerHash = (str) =>
  `${str}`
    .split("")
    .reduce((memo, item) => (memo * 31 * item.charCodeAt(0)) % 982451653, 7);

export const hashedTagColor = (ref) => {
  const data = [
    "#1abc9c",
    "#3498db",
    "#2ecc71",
    "#9b59b6",
    "#e74c3c",
    "#f1c40f",
    "#34495e",
    "#95a5a6",
    "#F58F84",
    "#317589",
    "#8DB255",
  ];
  return data[hashMod(ref, data.length)];
};

export const calColumn = (length) => {
  const sqrt = Math.sqrt(length);
  return sqrt % 1 === 0 ? sqrt : Math.floor(sqrt) + 1;
};

export const getDateObj = (birthDate) => {
  const [date, month, year] = birthDate.split("/");
  return new Date(year, month - 1, date);
};

export const getElapsedTime = (date) => {
  const now = new Date();
  return now.getTime() - date.getTime();
};

export const aggDataByDay = (data, currentYear) => {
  const dayArray = new Array(7).fill([]);
  data.forEach(({ name, birthday }) => {
    const [date, month, birthYear] = birthday.split("/");
    const currentBirthDate = `${date}/${month}/${currentYear}`;
    const originalBirthDate = getDateObj(birthday);
    const birthDate = getDateObj(currentBirthDate);
    const day = birthDate.getDay();
    const elapsedTime = getElapsedTime(originalBirthDate);
    if (currentYear >= birthYear) {
      dayArray[day] = [...dayArray[day], { name, elapsedTime }];
    }
  });
  return dayArray;
};
