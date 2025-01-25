function editElement(ref, match, replacer) {
  const pattern = new RegExp(match, 'g');
  const data = ref.textContent.replace(pattern, replacer);
  ref.textContent = data;
}
