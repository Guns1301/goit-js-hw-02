function formatString(string, maxLength = 40) {
  let cuttedString;
  const stringLength = string.split('');
  if (stringLength.length <= maxLength) {
    cuttedString = stringLength.join('');
  } else {
    cuttedString = stringLength.splice(0, maxLength).join('') + '...';
  }
  return cuttedString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
