 function count(e){
    var char = $(e).val();
    if(char){
      var lines = char.split(/\r|\r\n|\n/);
      $("#line_count").text(lines.length);
    }
    else{
      $("#line_count").text(0);
    }
    $("#char_count").text(char.length);
    CountWords(char);
  }

  function SentenceCase(){
    var texts = $("#texts").val();
    text = we(texts);
    $("#texts").val(text);
  }

  function LowerCase(){
    var texts = $("#texts").val();
    text = texts.toLowerCase();
    $("#texts").val(text);
  }

  function UpperCase(){
    var texts = $("#texts").val();
    text = texts.toUpperCase();
    $("#texts").val(text);
  }

  function CapitalizeCase(){
    var texts = $("#texts").val();
    text = texts.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
        return txtVal.toUpperCase();
    });
    $("#texts").val(text);
  }
  function AlterNatingCase(){
    var texts = $("#texts").val();
    text = alternate(texts);
    $("#texts").val(text);
  }

  function InverseCase(){
    var texts = $("#texts").val();
    var invertStr = "";
    for (var i = 0; i < texts.length; i++) {
      var ch = texts.charAt(i);
      if (ch == ch.toUpperCase()) {
          invertStr += ch.toLowerCase() 
      }else{
          invertStr += ch.toUpperCase(); 
      }
    }
    $("#texts").val(invertStr);

  }

  function CopyToClip(){
    var texts = $("#texts").val();
    copyToClipboard(texts);
  }
  function Download(){
    var texts = $("#texts").val();
    Dl('convert-text.txt',texts);
  }

  function Clear(){
    $("#texts").val('');
    $("#line_count").text(0);
    $("#char_count").text(0);
    $("#word_count").text(0);
  }

//External functions
  function CountWords(char) {
    var words = 0,word = char.trim().replace(/\s+/gi, " ");
    0 < word.length && (words = word.split(" ").length), (document.getElementById("word_count").innerHTML = words);
    words = 0;
    0 < char.length && (words = char.split(/\r*\n/).length), (document.getElementById("line_count").innerHTML = words);
  }
  function we(a) {
    a = a.toLowerCase();
    for (var b = !0, c = "", d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        /\.|\!|\?|\n|\r/.test(e) ? (b = !0) : "" != e.trim() && 1 == b && ((e = e.toUpperCase()), (b = !1)), (c += e);
    }
    return (c = _((c = "/" == window.location.pathname && -1 == window.location.search.indexOf("skip=i") ? c.replace(/\bi\b/g, "I") : c)));
  }
  function _(c) {
      return (c = c.replace(/\"([A-Za-z])/g, function (a) {
          return a.toUpperCase();
      }));
  }
  function alternate(changeString) {
    var charArray = changeString.toLowerCase().split("");
    for (var i = 1; i < charArray.length; i += 2) {
        charArray[i] = charArray[i].toUpperCase();
    }
    return charArray.join("");
  }

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(element).select();
    document.execCommand("copy");
    $temp.remove();
    $(".messages").fadeIn(1000).delay(5000).fadeOut(1000);
    $(".message").html('Text copied to clipboard!');
    $(".message").fadeIn(1000).delay(5000).fadeOut(1000);
  }

  function Dl(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
