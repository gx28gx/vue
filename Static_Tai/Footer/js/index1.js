window.onload = function () {
  var guideItems = document.querySelectorAll('#app .footer_a')
  var contentList = document.querySelectorAll('#app .content>div')

  for (var i = 0; i < guideItems.length; i++) {
    guideItems[i].index = i
    guideItems[i].addEventListener('touchend', function () {
      for (var j = 0; j < contentList.length; j++) {
        contentList[j].className = ''
        guideItems[j].className = 'footer_a'
      }
      var index = this.index
      contentList[index].className = 'on'
      this.className = 'footer_a on'
    })

  }

}
