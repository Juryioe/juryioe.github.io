const colorPicker = document.querySelector('#color-picker');
const colorPreview = document.querySelector('#color-preview');

colorPicker.value = '#ffffff'; 

colorPicker.addEventListener('input', () => {
  const color = colorPicker.value;
  colorPreview.style.backgroundColor = color;
});