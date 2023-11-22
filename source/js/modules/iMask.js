export function maskPhone() {
  const phone = document.getElementById('form__phone');
  if (phone) {
    const maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    const mask = IMask(phone, maskOptions);
  }
}
