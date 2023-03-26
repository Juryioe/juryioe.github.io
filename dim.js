var itt = 1;

function createIt() {
  var count = parseInt($('#count').val());
  if (!count) return;
  
  for (var i = 0; i < count; i++) {
    var div = $("<div>")
      .attr('style', 'position:absolute; border: 1px solid black; background:' + $('#spalva').val() + '; width: ' + $('#xx').val() + 'px; height: ' + $('#yy').val() + 'px;')
      .html('<a href=# onclick="if(confirm(\'Delete?\'))$(this).parent().remove()">' + $('#yy').val() + 'x' + $('#xx').val() + '<br/>&nbsp' + $('#aukstis').val() + '<br/><span>' + $('#pastaba').val())
      .attr('id', 'packet' + itt)
      .draggable()
      .click(function() {
        $(this).toggleClass("rotate");
      });

    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var scrollHeight = $(window).scrollTop();
    var scrollWidth = $(window).scrollLeft();

    var top = scrollHeight + (pageHeight / 2) - ($('#yy').val() / 2);
    var left = scrollWidth + (pageWidth / 2) - ($('#xx').val() / 2) - 200;

    div.css({
      top: top + 'px',
      left: left + 'px'
    });

    div.appendTo($("body")); 
    itt++;
  }
}
