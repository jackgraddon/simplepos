function SaveAsFile(t, f, m) {
  try {
    var b = new Blob([t], { type: m });
    saveAs(b, f);
  } catch (e) {
    window.open("data:" + m + "," + encodeURIComponent(t), "_blank", "");
  }
  fileText = [["Order Receipt \n"], ["Placed On", dayTime + "\n"]];
}
