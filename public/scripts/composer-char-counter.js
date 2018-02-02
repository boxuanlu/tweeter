$(document).ready(function() {
  let textarea = document.getElementsByTagName('textarea');
  $(textarea).on('input', function() {
    const maxText = 140;
    let textTypeIn = $(this).val().length;
    let spaceLeft = maxText - textTypeIn;
    let counter = $(this).siblings('.counter')
    $(counter).html(spaceLeft);
    if (spaceLeft <= 0) {
      $(counter).css({ 'color': 'red' });
    } else {
      $(counter).css({ 'color': 'black' });
    }
  });
});
