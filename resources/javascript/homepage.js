// # MODIFICATIONS FOR THE HOMEPAGE #
(function (window, document) {
  'use strict';
  
  // # ANOUNCEMENT ROTATION #
  window.GenkiAnn = {
    msg : document.querySelectorAll('.announcement'),
    index : 0,
    
    // shows the next announcement
    next : function (n, manual) {
      // hide old message
      GenkiAnn.msg[GenkiAnn.index].className += ' announce-hidden';
      
      // add +1 or -1 depending on the button press
      if (typeof n == 'number') {
        GenkiAnn.index += n;
        
        if (GenkiAnn.index == -1) {
          GenkiAnn.index = GenkiAnn.msg.length - 1;
        }
      } 
      
      // for automatic rotation increase index by 1
      else {
        GenkiAnn.index++;
      }
      
      // reset index if it exceeds the current announcements
      if (!GenkiAnn.msg[GenkiAnn.index]) {
        GenkiAnn.index = 0;
      }
      
      // show new message
      GenkiAnn.msg[GenkiAnn.index].className = GenkiAnn.msg[GenkiAnn.index].className.replace(' announce-hidden', '');
      
      // reset rotation if messages were moved manually
      if (manual) {
        //window.clearInterval(GenkiAnn.rotator);
        //GenkiAnn.rotate();
      }
    },
    
    // start announcement rotation
    rotate : function () {
      GenkiAnn.rotator = window.setInterval(GenkiAnn.next, 15000);
    }
  };
  
  // commence rotation if more than 1 announcement
  if (GenkiAnn.msg.length > 1) {
    document.getElementById('announcement-controls').style.display = '';
    //GenkiAnn.rotate();
  }
  
}(window, document));