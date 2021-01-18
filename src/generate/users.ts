function makeEmail() {
  const strValues = 'abcdefghigk1234567';
  let strEmail = '';
  let strTmp;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail += strTmp;
  }
  strTmp = '';
  strEmail += '@';
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < 5; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail += strTmp;
  }
  strEmail += '.com';
  return strEmail;
}

function randomName() {
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; i++) {
    const random = Math.floor(Math.random() * 27);
    result += String.fromCharCode(97 + random);
  }
  return result;
}

const streetNumber = ['254', '874', '354', '159', '951', '789'];
const streetName = ['A street', 'B street', 'C street', 'D street', 'E street', 'F street'];
const cityName = ['Stockholm', 'Munich', 'Kabul', 'Oslo', 'Prague', 'Krakow', 'Calgary'];
const stateName = ['Qassem State', 'North State', 'East State', 'South State', 'West State'];
const zipCode = ['28889', '96459', '35748', '15005', '99625', '71465'];

function getRandom(input: string[]) {
  return input[Math.floor((Math.random() * input.length))];
}

function createAddress() {
  return `${getRandom(streetNumber)} ${getRandom(streetName)} ${getRandom(cityName)} ${getRandom(stateName)} ${getRandom(zipCode)}`;
}

function phone() {
  return Math.random().toString().slice(2, 11);
}

const Users: {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  id: number }[] = [];

function UserArray() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; i++) {
    Users.push({
      name: randomName(),
      lastName: randomName(),
      phone: phone(),
      email: makeEmail(),
      address: createAddress(),
      id: i,
    });
  }
  return Users;
}

export const User = UserArray();
