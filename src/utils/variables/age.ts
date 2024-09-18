const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const alreadyHadABirthday = day <= 15 && month <= 4 ? true : false;
const age = alreadyHadABirthday ? year - 1998 - 1 : year - 1998;

export default age;
