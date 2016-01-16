$(document).ready(function(){
  $("#start").click(function(){
    $("#welcome").fadeOut(750)
    $("#aboutme").delay(1000).fadeIn(750)

  })
  
  
  $("#general").click(function(){
    $("#aboutme").fadeOut(750)
    $("#aboutgeneral").fadeIn(750)
  })
  
  $("#tech").click(function(){
    $("#aboutme").fadeOut(750)
    $("#abouttech").fadeIn(750)
  })
  
  $("#design").click(function(){
    $("#aboutme").fadeOut(750)
    $("#aboutdesign").fadeIn(750)
  })
  $("#nav").click(function(){
    $("#welcome").add("#aboutgeneral").add("#abouttech").add("#aboutdesign").fadeOut(500)
    $("#aboutme").fadeIn(750)
  })
})