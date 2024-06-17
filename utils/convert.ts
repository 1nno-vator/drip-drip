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
