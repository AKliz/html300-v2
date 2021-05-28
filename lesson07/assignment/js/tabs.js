function switchTab(tab__id, tab__content) {

  //displays the content of the tab we need
  var tab = document.getElementById(tab__content);
  var tabButton = document.getElementById(tab__id);
  var x = document.getElementsByClassName("content__mainsection__tab");
  var y = document.getElementsByClassName("tabmenu");


  for (i = 0; i< x.length; i++){
    x[i].classList.add("inactive");
    x[i].classList.remove("active"); // HIDE ALL TAB CONTENT
  }
  console.log('inactive added to content')

  for (i = 0; i< y.length; i++){
    y[i].classList.remove("active");// HIDE ALL TAB menu
  }
  console.log('active removed from all menu items')


  tab.classList.add("active");
  tab.classList.remove("inactive");
  console.log("active added content");

  tabButton.classList.add("active");
  console.log("active added to menu");

}
