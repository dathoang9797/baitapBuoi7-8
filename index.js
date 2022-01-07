const inputEl = document.getElementById('soNguyen');
const viTri1El = document.getElementById('viTri1');
const viTri2El = document.getElementById('viTri2');
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

const alertError = (messageError) => {
  Swal.fire({
    icon: 'error',
    title: messageError,
  });
};

const addNumberToArray = () => {
  const number = +inputEl.value;
  if (isNaN(number) || !inputEl.value.length) {
    alertError('Number is not valid');
    return;
  }
  arrNumber.push(number);
  showArrayNumberToText(arrNumber);
};

const sumPositiveNumberInArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to sum");
    return '';
  }
  let sum = arrNumber.reduce((sum, number) => {
    if (number > 0) {
      return (sum += number);
    }
    return sum;
  }, 0);
  return sum;
};

const countPositiveNumberInArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to count");
    return '';
  }
  let count = arrNumber.reduce((count, number) => {
    if (number > 0) {
      return (count = ++count);
    }
    return count;
  }, 0);
  return count;
};

const findMinNumberInArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to find");
    return '';
  }
  return Math.min(...arrNumber);
};

const findMinPositiveNumberInArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to find");
    return '';
  }
  const positiveNumberArray = arrNumber.filter((number) => number > 0);
  if (!positiveNumberArray.length) {
    return 'Không có số dương trong mảng';
  }
  return Math.min(...positiveNumberArray);
};

const findLastEvenNumberInArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to find");
    return '';
  }
  const reverseNumberArr = [...arrNumber].reverse();
  if (reverseNumberArr[0] >= 2 && reverseNumberArr[0] % 2 === 0) {
    return reverseNumberArr[0];
  }
  return -1;
};

const sortNumberArrayAsc = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to sort");
    return '';
  }
  const sortArrayNumber = [...arrNumber].sort((a, b) => a - b);
  return sortArrayNumber.join(',');
};

const findPrimeInNumberArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to find");
    return '';
  }
  const firstNumberPrime = arrNumber.find((number) => Number.isInteger(number) && checkPrime(number));
  if (!firstNumberPrime) return -1;
  return firstNumberPrime;
};

const comparePositiveAndNegativeNumberArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to compare");
    return '';
  }
  let countPositive = 0;
  let countNegative = 0;
  arrNumber.forEach((number) => {
    switch (true) {
      case number > 0:
        countPositive++;
        return;
      case number < 0 && number !== 0:
        countNegative++;
        return;
    }
  });
  return countPositive > countNegative ? 'Số dương nhiều hơn' : countPositive === countNegative ? 'Bằng nhau' : 'Số âm nhiều hơn';
};

const countIntegerInNumberArray = () => {
  if (!arrNumber.length) {
    alertError("Don't have array number to find");
    return '';
  }
  let countInteger = arrNumber.reduce((countInteger, number) => {
    if (Number.isInteger(number)) {
      return (countInteger = ++countInteger);
    }
    return countInteger;
  }, 0);
  return `Có ${countInteger} số nguyên trong mảng`;
};

const convertPositionNumberInArray = (viTri1Val, viTri2Val) => {
  if (!arrNumber.length) {
    alertError("Don't have array number to convert");
    return '';
  }
  const arrConvertPosition = [...arrNumber];
  switch (true) {
    case viTri1Val > arrConvertPosition.length || viTri2Val > arrConvertPosition.length:
      alertError('Vị trí quá lớn so với độ dài mảng');
      return '';
    case !viTri1Val || !viTri2Val:
      alertError('Vui lòng nhập đủ cả 2 vị trí');
      return '';
    default: {
      let temp = 0;
      const indexVal1 = viTri1Val - 1;
      const indexVal2 = viTri2Val - 1;
      for (let index = 0; index < arrConvertPosition.length; index++) {
        if (indexVal1 === index || indexVal2 === index) {
          temp = arrConvertPosition[indexVal1];
          arrConvertPosition[indexVal1] = arrConvertPosition[indexVal2];
          arrConvertPosition[indexVal2] = temp;
          return arrConvertPosition;
        }
      }
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
        const viTri1Val = +viTri1El.value;
        const viTri2Val = +viTri2El.value;
        outputEl.innerText = convertPositionNumberInArray(viTri1Val, viTri2Val).join(',');
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
  addNumberToArray();
});

buttonClearEl.addEventListener('click', function (event) {
  arrNumber.length = 0;
  showArrayNumberToText(arrNumber);
});

inputEl.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') addNumberToArray();
});
