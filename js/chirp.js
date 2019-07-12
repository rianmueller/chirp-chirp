function chirp(n) {
  if (n === 0) {
    return "";
  }
  let str = "chirp ";
  return str + chirp(--n);
}

$(document).ready(function() {
  $("#result").html(chirp(3));
});
