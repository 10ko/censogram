$(document).ready(function(){
  $('.timelineCommentText').each(function(){
    var text = $(this).text();
    var final = "";
    var i = 0;
    var j = 0;
    for(i=0; i<text.length;i++){
      var tag = "";
      if(text.charAt(i) === "#"){
        j = 0;
        tag+=text.charAt(i);
        for(j=i+1;j<=text.length;j++){
          if(text.charAt(j) != " " && text.charAt(j) != "#" && j != text.length){
            tag+=text.charAt(j);
          }else {
            final+='<span class="censogram">' + tag + '</span>';
            i = j-2;
            tag = "";
            break;
          }
        }
      }
      if(i === 0 || (tag === "" && i != j-1 && i != j-2)){
        final+=text.charAt(i);
      }
      
    }
    $(this, "span").text(final);
  });

});
