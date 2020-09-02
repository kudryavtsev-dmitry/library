export const orderStatus = (status) => {
  switch (status) {
    case 1:
      return "Ожидает подтверждения";
    case 2:
      return "Подтвержден";
    case 3:
      return "Возвращен"
    default:
      return 'неизвестный статус'
  }
};