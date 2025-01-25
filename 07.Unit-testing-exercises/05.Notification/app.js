function notify(message) {
  const notificationDiv = Object.assign(document.getElementById('notification'), {
    textContent: message,
  });
  Object.assign(notificationDiv.style, {
    display: 'block',
  });

  notificationDiv.addEventListener('click', () => (notificationDiv.style.display = 'none'));
}
