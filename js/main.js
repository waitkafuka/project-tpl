$(function(){
  /**
   * 数据渲染
   * @param {*} id 
   * @param {*} content 
   */
  function appendData(id,content){
    var html = '';
    content.forEach(function (box) {
      if(!box.isZhuanti) {
        html +='<div class="box"><img class="box-bg" src=""><img class="box-title" id="'+box.id+'" src="'+box.titleImg+'">';
              box.booklist.forEach(function(books){
                html +='<div class="list">';
                  books.list.forEach(function(book){
                    html +='<a class="item" href="'+book.bookurl+'" target="_blank">\
                              <img class="book-bg" src="'+book.imgUrl+'"/>';
                      book.text.forEach(function (text_item, index) {
                        html += '<span class="book-text'+index+'">'+text_item+'</span>'
                      })   
                    html += '</a>'
                  })
                  html+='</div>'
                });
          html +='</div>';
      } else {
        html +='<div class="recom"><img class="box-title"  src="'+box.titleImg+'">';
                box.booklist.forEach(function(books){
                  html +='<div class="list-box">';
                  books.list.forEach(function(book){
                    html +='<div class="recom-item">\
                            <a href="'+book.bookurl+'" target="_blank">\
                              <img src="'+book.imgUrl+'" alt="">\
                            </a>\
                          </div>'
                  })
                  html+='</div>'
                });
          html +='</div>';
      }
    })
    $(id).html(html);
  }
  /**
   * 侧边导航模块
   * @param {*} dom 
   * @param {*} list 
   */
  function appendDataSidebar(dom,list){
    var html ='<ul class="menu">';
    list.forEach(function (item) {
      html +='<li><a href="'+item.href+'">'+item.titleText +'</a></li>'
    })
    html +='<li class="top"><a href="#top">返回顶部</a></li></ul>'
    $(dom).html(html);
  }
  // appendData('#content',content);
  appendDataSidebar('.slider',content);
})