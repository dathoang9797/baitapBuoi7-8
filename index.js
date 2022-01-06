const inputEl = document.getElementById('soNguyen');
const vitri1El = document.getElementById('viTri1');
const vitri2El = document.getElementById('viTri2');
const buttonEl = document.getElementById('btnAdd');
const outputEl = document.getElementById('outputResult');
const buttonClearEl = document.getElementById('clearAdd');
const showArrayNumberEl = document.getElementById('showArrayNumber');
const btnConvert = document.getElementById('btnConvert');
const btnCauHoi = document.querySelectorAll('#btnCauHoi');
const arrNumber = [];

const showArrayNumberToText = (arrNumber) => {
  showArrayNumberEl.innerHTML = `<p class='text-center m-0'>${arrNumber.join(',')}</p>`;
  inputEl.value = '';
};

const checkPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

const addNumberToArray = () => {
  const number = +inputEl.value;

  if (!inputEl.value.length) {
    Swal.fire({
      icon: 'error',
      title: 'Number is not valid',
    });
    return;
  }

  if (number === 0) {
    arrNumber.push(number);
    showArrayNumberToText(arrNumber);
    return;
  }

  if (!number) {
    Swal.fire({
      icon: 'error',
      title: 'Number is not valid',
    });
    return;
  }

  arrNumber.push(number);
  showArrayNumberToText(arrNumber);
};

const sumPositiveNumberInArray = () => {
  // if (!arrNumber.length) {
  //   Swal.fire({
  //     icon: 'error',
  //     title: "Don't have array number to sum",
  //   });
  //   return '';
  // }
  let sum = 0;
  arrNumber.forEach((number) => {
    if (number > 0) {
      sum += number;
    }
  });
  return sum;
};

const countPositiveNumberInArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to count",
    });
    return '';
  }
  let count = 0;
  arrNumber.forEach((number) => {
    if (number > 0) {
      count++;
    }
  });
  return count;
};

const findMinNumberInArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to find",
    });
    return '';
  }
  return Math.min(...arrNumber);
};

const findMinPositiveNumberInArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to find",
    });
    return '';
  }
  const positiveNumberArray = arrNumber.filter((number) => number > 0);
  if (positiveNumberArray.length === 0) {
    return 'Không có số dương trong mảng';
  }
  return Math.min(...positiveNumberArray);
};

const findLastEvenNumberInArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to find",
    });
    return '';
  }
  const reverseNumberArr = [...arrNumber].reverse();
  if (reverseNumberArr[0] % 2 === 0) {
    return reverseNumberArr[0];
  }
  return -1;
};

const sortNumberArrayAsc = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to sort",
    });
    return;
  }
  const sortArrayNumber = [...arrNumber].sort((a, b) => a - b);
  return sortArrayNumber.join(',');
};

const findPrimeInNumberArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to find",
    });
    return '';
  }
  const firstNumberPrime = arrNumber.find((number) => Number.isInteger(number) && checkPrime(number));
  if (!firstNumberPrime) return -1;
  return firstNumberPrime;
};

const comparePositiveAndNegativeNumberArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to compare",
    });
    return;
  }
  let countPositive = 0;
  let countNegative = 0;
  arrNumber.forEach((number) => {
    if (number >= 0) {
      countPositive++;
    } else {
      countNegative++;
    }
  });
  return countPositive > countNegative ? 'Số dương nhiều hơn' : countPositive === countNegative ? 'Bằng nhau' : 'Số âm nhiều hơn';
};

const countIntegerInNumberArray = () => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to find",
    });
    return '';
  }
  let countInteger = 0;
  arrNumber.forEach((number) => {
    if (Number.isInteger(number)) {
      countInteger++;
    }
  });
  return `Có ${countInteger} số nguyên trong mảng`;
};

const convertPositionNumberInArray = (vitri1Val, vitri2Val) => {
  if (!arrNumber.length) {
    Swal.fire({
      icon: 'error',
      title: "Don't have array number to convert",
    });
    return;
  }
  const arrConvertPosition = [...arrNumber];

  if (vitri1Val > arrConvertPosition.length || vitri2Val > arrConvertPosition.length) {
    Swal.fire({
      icon: 'error',
      title: 'Vị trí quá lớn so với độ dài mảng',
    });
    return;
  }

  if (!vitri1Val || !vitri2Val) {
    Swal.fire({
      icon: 'error',
      title: 'Vui lòng nhập đủ cả 2 vị trí',
    });
    return;
  }

  let temp = 0;
  const indexVal1 = vitri1Val - 1;
  const indexVal2 = vitri2Val - 1;
  for (let index = 0; index < arrConvertPosition.length; index++) {
    if (indexVal1 === index || indexVal2 === index) {
      temp = arrConvertPosition[indexVal1];
      arrConvertPosition[indexVal1] = arrConvertPosition[indexVal2];
      arrConvertPosition[indexVal2] = temp;
      return arrConvertPosition;
    }
  }
};

btnCauHoi.forEach((itemCauHoi, index) => {
  switch (index + 1) {
    case 1:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        outputEl.innerText = sumPositiveNumberInArray();
      });
      return;
    case 2:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = countPositiveNumberInArray();
      });
      return;
    case 3:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findMinNumberInArray();
      });
      return;
    case 4:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findMinPositiveNumberInArray();
      });
      return;
    case 5:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findLastEvenNumberInArray();
      });
      return;
    case 6:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        const vitri1Val = +vitri1El.value;
        const vitri2Val = +vitri2El.value;
        outputEl.innerText = convertPositionNumberInArray(vitri1Val, vitri2Val).join(',');
      });
      return;
    case 7:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = sortNumberArrayAsc();
      });
      return;
    case 8:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findPrimeInNumberArray();
      });
      return;
    case 9:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = countIntegerInNumberArray();
      });

      return;
    case 10:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = comparePositiveAndNegativeNumberArray();
      });
      return;
  }
});

buttonEl.addEventListener('click', function (event) {
  event.preventDefault();
  addNumberToArray();
});

buttonClearEl.addEventListener('click', function (event) {
  event.preventDefault();
  arrNumber.length = 0;
  showArrayNumberToText(arrNumber);
});
