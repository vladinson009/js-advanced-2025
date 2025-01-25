function encodeAndDecodeMessages() {
  const [senderBtn, recieverBtn] = document.querySelectorAll('button');
  senderBtn.addEventListener('click', sender);
  recieverBtn.addEventListener('click', reciever);
  const textarea = document.querySelectorAll('textarea');
  const senderValue = textarea[0];
  const recieverValue = textarea[1];

  function sender() {
    let result = '';
    for (let i = 0; i < senderValue.value.length; i++) {
      const symAsChar = senderValue.value.charCodeAt(i) + 1;
      result += String.fromCharCode(symAsChar);
    }
    recieverValue.value = result;
    senderValue.value = '';
  }

  function reciever() {
    let result = '';
    for (let i = 0; i < recieverValue.value.length; i++) {
      const symAsChar = recieverValue.value.charCodeAt(i) - 1;
      result += String.fromCharCode(symAsChar);
    }
    recieverValue.value = result;
  }
}
