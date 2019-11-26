// # MODIFICATIONS FOR ALL PAGES (<HEAD>) #
(function (window, document) {
  'use strict';
  
  // # GENKI MODAL #
  // creates a modal or closes one
  window.GenkiModal = {
    isOpen : false,
    
    // opens a new modal
    // params: object (optional)
    // {
    //      title : string,
    //    content : string,
    // buttonText : string,
    //    noFocus : bool, (keeps buttons from being focused)
    //      focus : string, (pass a css selector to focus a specific element; overrides noFocus)
    //   keepOpen : bool, (keeps the modal open when clicking the callback button; useful for opening another modal afterwards)
    //   callback : function, (function to execute when OK is pressed)
    //      close : function (function to execute when close is pressed)
    // } // all values are optional
    open : function (o) {
      o = o ? o : {};
      
      // close opened modal
      if (GenkiModal.isOpen) {
        GenkiModal.close();
      }
      
      GenkiModal.isOpen = true;

      // create the modal and set its params
      var modal = document.createElement('DIV'), button, buttons;
      modal.id = 'genki-modal';
      modal.innerHTML = 
      '<div id="genki-modal-overlay"></div>'+
      '<div id="genki-modal-body">'+
        '<h2 id="genki-modal-header">' + ( o.title ? o.title : _lang.modal_title_default ) + '</h2>'+
        '<div id="genki-modal-content">' + ( o.content ? o.content : '' ) + '</div>'+
        '<div id="genki-modal-buttons" class="center">'+
          '<button id="genki-modal-close" class="button">' + _lang.modal_close + '</button>'+
        '</div>'+
      '</div>';

      // create a button for the callback function
      if (o.callback) {
        button = document.createElement('BUTTON');
        buttons = modal.querySelector('#genki-modal-buttons');

        // set button params
        button.innerText = o.buttonText ? o.buttonText : _lang.modal_ok;
        button.id = 'genki-modal-ok';
        button.className = 'button';
        button.onclick = function () {
          o.callback();
          !o.keepOpen && GenkiModal.close();
        };

        // insert button into buttons list
        buttons.insertBefore(button, buttons.firstChild);
      }

      // add the modal to the document
      document.body.style.overflow = 'hidden';
      document.body.appendChild(modal);
      
      modal.querySelector('#genki-modal-close').onclick = function () {
        if (o.close) {
          o.close();
        }
        
        GenkiModal.close();
      };

      // focus confirm/ok button
      if (o.focus) {
        document.querySelector(o.focus).focus();
        
      } else if (!o.noFocus) {
        document.getElementById('genki-modal-' + (o.callback ? 'ok' : 'close')).focus();
      }
    },

    // close the modal
    close : function () {
      var modal = document.getElementById('genki-modal');

      if (modal) {
        document.body.style.overflow = '';
        document.body.removeChild(modal);
      }
      
      GenkiModal.isOpen = false;
    }
  };
  
  
  // fixes and parses floats
  window._parseVal = function (n) {
    return parseFloat(n.toFixed(2));
  };
  
}(window, document));