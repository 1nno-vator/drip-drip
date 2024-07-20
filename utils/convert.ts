export function convertSliderValue(sv: number) {
  switch (sv) {
    case 10:
      return "아주 가늘게";
    case 20:
      return "가늘게";
    case 30:
      return "보통";
    case 40:
      return "굵게";
    case 50:
      return "아주 굵게";
  }
}

export function roundToDecimalPlace(num: number, decimalPlaces: number) {
  // 먼저 입력값이 숫자인지 확인
  if (isNaN(num)) {
    return NaN; // 숫자가 아니면 NaN 반환
  }

  // 입력값을 소수점 자릿수만큼 곱한 후 반올림한 뒤 다시 나누기
  const factor = Math.pow(10, decimalPlaces);
  const roundedNum = Math.round(num * factor) / factor;

  // 소수점 이하 자릿수가 필요한 경우에만 소수점 표시
  if (decimalPlaces > 0) {
    // 정수로 변환한 값과 원래 값이 같으면 소수점 이하가 0이므로 정수로 반환
    if (Math.floor(roundedNum) === roundedNum) {
      return roundedNum.toFixed(0); // 소수점 이하가 0인 경우 정수로 변환
    } else {
      return roundedNum.toFixed(decimalPlaces); // 소수점 이하 자릿수대로 표시
    }
  } else {
    return String(Math.round(roundedNum)); // 소수점 자릿수가 0이면 정수로 변환 후 문자열로 반환
  }
}
