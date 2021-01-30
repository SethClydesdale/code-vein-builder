(function (window, document) {
  'use strict';
  
  window.CodeVeinBuilder = {
    // "build" stores your selection as an alphanumeric id, where the id is used to access data in CodeVeinBuilder.data
    // consult node cache for index order (CodeVeinBuilder.cache.build)
    build : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
    // available languages
    languages : {
      '0 - submit_translation' : 'submit',
      '1 - English' : 'en',
      '2 - 繁體中文' : 'zh-hant'
	  '3 - 日本語' : 'ja'
    },
    
    // node cache + any other cached data
    cache : {
      buildList : document.getElementById('build-list'),
      buildDesc : document.getElementById('build-desc'),
      build : [
        document.getElementById('blood-code'),
        
        document.getElementById('weapon-1'),
        document.getElementById('weapon-2'),
        document.getElementById('blood-veil'),

        document.getElementById('transform-1'),
        document.getElementById('transform-2'),
        document.getElementById('transform-3'),

        document.getElementById('passive-1'),
        document.getElementById('passive-2'),
        document.getElementById('passive-3'),
        document.getElementById('passive-4'),

        document.getElementById('active-1'),
        document.getElementById('active-2'),
        document.getElementById('active-3'),
        document.getElementById('active-4'),
        document.getElementById('active-5'),
        document.getElementById('active-6'),
        document.getElementById('active-7'),
        document.getElementById('active-8')
      ],
      
      infoColumn : {
        status : document.getElementById('status-info'),
        options : document.getElementById('options')
      },
      
      selector : {
        window : document.getElementById('selector-window'),
        box : document.getElementById('selector-box'),
        infoTop : document.getElementById('selector-info-top'),
        infoBottom : document.getElementById('selector-info-bottom')
      }
    },
    
    // various data on weapons, skills, etc...
    // see file in resources/javascript/data.js
    data : {
      // contains arrays for the order of gifts, equipment, etc..
      order : {},
      
      // dummy data used for default values, mostly during comparisons
      dummy : {
        blood_code : {
          mobility : 'none',
          weight : 0,

          stats : {
            str : 0,
            dex : 0,
            mnd : 0,
            wil : 0,
            vit : 0,
            for : 0
          },

          ichor : {
            min : 0,
            max : 0
          }
        },
        
        equipment : {
          scaling : {
            str : 0,
            dex : 0,
            mnd : 0,
            wil : 0,
            vit : 0,
            for : 0
          }
        },
        
        active : {
          ichor_cost : 0,
          cooldown : 0,
          physical : 0,
          elemental : 0,
          usage_req : 0
        }
      }
    },
    

    // current stats + status modifying functions and helpers
    status : {
      
      // stats for calculating what weapon/skill you can use
      // min: 0 (-), max: 12 (S+); should be rounded down to 12 if exceeded (esp. for calculations)
      stats : {
        str : 0,
        dex : 0,
        mnd : 0,
        wil : 0,
        vit : 0,
        for : 0
      },
      
      // amount of ichor a blood code has (+passives)
      ichor : {
        min : 0,
        max : 0
      },
      
      // total weight for each weapon
      weight : {
        weapon_1 : 0,
        transform_4 : 0,
        
        weapon_2 : 0,
        transform_5 : 0,
        
        blood_veil : 0,
        transform_6 : 0,
        
        max : 0,
        max_multiplier : 0
      },
      
      // array used for changing stats linked to the data object
      // add to this array to make stats functional (stats must be identical to those in status and data[blood_code||passive||etc])
      values : ['stats', 'ichor'],
      
      // stat key
      // raw numbers are used for background calculations whereas the letters are shown in the foreground
      // this is for converting numbers to the following grade system
      key : [
        '-',  // 0
        'E',  // 1
        'E+', // 2
        'D',  // 3
        'D+', // 4
        'C',  // 5
        'C+', // 6
        'B',  // 7
        'B+', // 8
        'A',  // 9
        'A+', // 10
        'S',  // 11
        'S+'  // 12
      ],
      
      // mobility key
      // converts a string into a number for comparison
      // other keys are loaded via lang.js file
      mobiKey : { none : -1 },
      
      
      // updates internal stats
      update : function (o) {
        var type = o.type == 0 ? 'blood_code' :
                   o.type == 1 || o.type == 2 ? 'weapon' :
                   o.type == 3 ? 'blood_veil' :
                   o.type == 4 || o.type == 5 || o.type == 6 ? 'transform' : 'passive',
            
            oldValue = o.id == 0 || (o.oldId && o.oldId != 0) ? CodeVeinBuilder.data[type][o.oldId] : null,
            newValue = o.id != 0 ? CodeVeinBuilder.data[type][o.id] : null,
            
            val = CodeVeinBuilder.status.values, // stats to add/subtract
            j = val.length,
            i, k;
        
        if (oldValue) {
          // remove old stats for passives/blood codes
          if (/blood_code|passive/.test(type)) {
            for (i = 0; i < j; i++) {
              if (oldValue[val[i]]) {
                for (k in oldValue[val[i]]) {
                  CodeVeinBuilder.status[val[i]][k] -= oldValue[val[i]][k];
                }
              }
            }
          }
          
          // remove old weight for the following types
          switch (type) {
            case 'blood_code' :
              CodeVeinBuilder.status.weight.max -= oldValue.weight;
              break;
              
            case 'weapon' :
              CodeVeinBuilder.status.weight['weapon_' + o.type] -= oldValue.weight;
              break;
              
            case 'blood_veil' :
              CodeVeinBuilder.status.weight.blood_veil -= oldValue.weight;
              break;
              
            case 'transform' :
              if (oldValue.dec_weight || oldValue.inc_weight) {
                CodeVeinBuilder.status.weight['transform_' + o.type] -= 
                  oldValue.dec_weight ? oldValue.dec_weight :
                          o.type == 6 ? oldValue.inc_weight.blood_veil : oldValue.inc_weight.weapon;
              }
              break;
              
            case 'passive' :
              if (o.oldId == 'A19') {
                CodeVeinBuilder.status.weight.max_multiplier -= oldValue.inc_max_weight;
              }
              break;
          }
        }

        if (newValue) {
          // add new stats for passives/blood codes
          if (/blood_code|passive/.test(type)) {
            for (i = 0; i < j; i++) {
              if (newValue[val[i]]) {
                for (k in newValue[val[i]]) {
                  CodeVeinBuilder.status[val[i]][k] += newValue[val[i]][k];
                }
              }
            }
          }
          
          // add new weight for the following types
          switch (type) {
            case 'blood_code' :
              CodeVeinBuilder.status.weight.max += newValue.weight;
              break;
              
            case 'weapon' :
              CodeVeinBuilder.status.weight['weapon_' + o.type] += newValue.weight;
              break;
              
            case 'blood_veil' :
              CodeVeinBuilder.status.weight.blood_veil += newValue.weight;
              break;
              
            case 'transform' :
              if (newValue.dec_weight || newValue.inc_weight) {
                CodeVeinBuilder.status.weight['transform_' + o.type] += 
                  newValue.dec_weight ? newValue.dec_weight :
                          o.type == 6 ? newValue.inc_weight.blood_veil : newValue.inc_weight.weapon;
              }
              break;
              
            case 'passive' :
              if (o.id == 'A19') {
                CodeVeinBuilder.status.weight.max_multiplier += newValue.inc_max_weight;
              }
              break;
          }
        }
      },
      
      
      // getters for various status values
      get : {
        
        // gets and returns the weight and mobility for the currently equipped items/skills
        // [optional] clone: a cloned status.weight object for comparisons
        // [optional] code: a blood code passed from data.blood_code for using it's max weight for comparisons
        weight : function (clone, code) {
          var data = {},
              obj = clone || CodeVeinBuilder.status.weight,
              blood_code = code || CodeVeinBuilder.data.blood_code[CodeVeinBuilder.build[0]],
              key = ['max', 'weapon_1', 'weapon_2', 'blood_veil', 'total_1', 'total_2', 'mobility_1', 'mobility_2'],
              i = 0,
              j = key.length,
              transform, weight, max;

          for (; i < j; i++) {
            // max weight
            if (key[i] == 'max') {
              data[key[i]] = _parseVal(obj.max * (obj.max_multiplier || 1));
            }
            
            // weapon and blood veil weight
            else if (/weapon_|blood_veil/.test(key[i])) {
              transform = key[i] == 'blood_veil' ? 6 : +key[i].replace('weapon_', '') + 3;
              data[key[i]] = _parseVal(
                CodeVeinBuilder.build[transform] == 'A0' ?
                  obj[key[i]] / obj['transform_' + transform] : // alleviation
                  obj[key[i]] * (obj['transform_' + transform] || 1) // default/fortification
              );
            }
            
            // combined weight for weapon_(1&2) + blood veil
            else if (/total_/.test(key[i])) {
              data[key[i]] = _parseVal(data['weapon_' + key[i].replace('total_', '')] + data.blood_veil);
            }
            
            // mobility for weapon 1 and 2
            else if (/mobility_/.test(key[i])) {
              if (blood_code) {
                weight = data['total_' + key[i].replace('mobility_', '')];
                max = data.max;

                switch (CodeVeinBuilder.status.mobiKey[blood_code.mobility]) { // base mobility
                  case 0 : // slow
                    data[key[i]] = weight > max / 2 ? _lang.mobi.slow : weight <= max / 2 && weight > max / 5 ? _lang.mobi.normal : _lang.mobi.quick;
                    break;

                  case 1 : // normal
                    data[key[i]] = weight > max ? _lang.mobi.slow : weight <= max && weight > max / 2 ? _lang.mobi.normal : _lang.mobi.quick;
                    break;

                  case 2 : // quick
                    data[key[i]] = weight > max * 1.35 ? _lang.mobi.slow : weight <= max * 1.35 && weight > max ? _lang.mobi.normal : _lang.mobi.quick;
                    break;
                }
              } else {
                data[key[i]] = _lang.na;
              }
            }
          }
          
          return data;
        }
      },
      
      
      // displays stats next to the build
      display : function () {
        var blood_code = CodeVeinBuilder.data.blood_code[CodeVeinBuilder.build[0]] || {
          name : '-',
          mobility : '-'
        },
        stats = '',
        i,
        
        // weight values
        weight = CodeVeinBuilder.status.get.weight();
        
        
        // loop through the stats and compile them into an easy to read list
        for (i in CodeVeinBuilder.status.stats) {
          stats += 
            '<div class="info-row">'+
              '<span class="info-label"><span class="t-darker">' + i.toUpperCase() + '</span> ' + _lang[i] + '</span>'+
              '<span class="info-value">' + CodeVeinBuilder.status.key[CodeVeinBuilder.status.stats[i] > 12 ? 12 : CodeVeinBuilder.status.stats[i]] + '</span>'+
            '</div>';
        }

        // display the stats next to the build
        CodeVeinBuilder.cache.infoColumn.status.innerHTML = 
          '<div id="stats-window" class="ui-window">'+
            '<div class="ui-title">' + _lang.status + '</div>'+
            '<div class="ui-window-inner">'+
              '<div class="info-group">'+
                '<div class="info-row">'+
                  '<span class="info-label">' + _lang.blood_code + '</span>'+
                  '<span class="info-value">' + blood_code.name + '</span>'+
                '</div>'+
          
                '<div class="info-row">'+
                  '<span class="info-label">' + _lang.ichor + '</span>'+
                  '<span class="info-value">' + CodeVeinBuilder.status.ichor.min + ' (' + CodeVeinBuilder.status.ichor.max + ')' + '</span>'+
                '</div>'+
          
                '<div class="info-row">'+
                  '<span class="info-label">' + _lang.mobi.base + '</span>'+
                  '<span class="info-value">' + blood_code.mobility + '</span>'+
                '</div>'+
              '</div>'+
          
              '<div class="info-group">'+
                stats+
              '</div>'+
          
              '<div class="info-group">'+
                '<div class="info-row">'+
                  '<span class="info-label">' + _lang.mobility + ' 1</span>'+
                  '<span class="info-value">' + weight.mobility_1 + ' (' + weight.total_1 + '/' + weight.max + ')</span>'+
                '</div>'+
          
                '<div class="info-row">'+
                  '<span class="info-label">' + _lang.mobility + ' 2</span>'+
                  '<span class="info-value">' + weight.mobility_2 + ' (' + weight.total_2 + '/' + weight.max + ')</span>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';
      },
      
      
      // functions for checking requirements
      check : {
        
        // check if the stat requirements are met for a skill/item and returns a class or empty string
        stats : function (type, id, clone) {
          if (CodeVeinBuilder.data[type][id]) {
            var build = CodeVeinBuilder.build,
                required = CodeVeinBuilder.data[type][id].required,
                code_req = CodeVeinBuilder.data[type][id].blood_code_req,
                weapon_req = CodeVeinBuilder.data[type][id].weapon_req,
                className = '',
                bad = 'ui-stats-bad',
                i;

            // check if there's a blood code requirement
            if (code_req && build[0] != code_req) {
              className = bad;
            }
            
            // check if there's a weapon requirement
            if (weapon_req && (build[1] == 0 || weapon_req.indexOf(build[1].charAt(0)) == -1) && (build[2] == 0 || weapon_req.indexOf(build[2].charAt(0)) == -1)) {
              className = bad;
            }
            
            // check if the skill/item has stat requirements
            if (required && className != bad) {
              // loop and compare the requirements to the current builds stats
              for (i in required) {
                // return a bad classname if the stats are insufficient
                if ((clone || CodeVeinBuilder.status.stats)[i] < required[i]) {
                  className = bad;
                  break;
                }
              }
            }

            return className; // returns an empty string if the stats are good
            
          } else {
            return '';
          }
        },
        
        
        // checks the build to see if currently equipped skills/items meet their stat requirements
        equipped : function () {
          // numbers 1-3 refers to equipment; numbers 7-10 refers to passives; numbers 11-18 refers to actives
          for (var id = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], i = 0, j = id.length, block, badStats, bad; i < j; i++) {
            block = CodeVeinBuilder.cache.build[id[i]];
            badStats = CodeVeinBuilder.status.check.stats(block.dataset.type, block.dataset.id);

            // add the bad class if stats are insufficient
            if (badStats && !/ui-stats-bad/.test(block.className)) {
              block.className += ' ' + badStats;
              bad = true;
            }

            // remove the bad class if stats are sufficient
            else if (!badStats && /ui-stats-bad/.test(block.className)) {
              block.className = block.className.replace(' ui-stats-bad', '');
            }
          }
          
          // alert the user of unuseable equipment/gifts that are equipped
          if (bad) {
            CodeVeinBuilder.alert.open(_lang.equip_error);
          }
        }
      },
      
      
      // reset stats (mostly for when onpopstate is triggered)
      reset : function () {
        // reset stats
        for (var val = CodeVeinBuilder.status.values, i = 0, j = val.length, k; i < j; i++) {
          for (k in CodeVeinBuilder.status[val[i]]) {
            CodeVeinBuilder.status[val[i]][k] = 0;
          }
        }
        
        // reset weight
        for (i in CodeVeinBuilder.status.weight) {
          CodeVeinBuilder.status.weight[i] = 0;
        }
      }
    },
    
    
    // alert system
    alert : {
      isOpen : false,
      
      // open an alert
      open : function (text) {
        if (CodeVeinBuilder.alert.isOpen) {
          CodeVeinBuilder.alert.close(true);
        }
        
        var alert = document.createElement('DIV');
        alert.id = 'cv-alert';
        alert.className = 'alert-closed';
        alert.innerHTML = '<div id="cv-alert-body">'+
          '<div id="cv-alert-icon" class="icon-glow"><i class="fa">&#xf05a;</i></div>'+
          '<div id="cv-alert-text"><p>' + text + '</p></div>'+
        '</div>';
        
        // closes the alert when clicked (swat it like a pesky fly!)
        alert.onclick = function () {
          CodeVeinBuilder.alert.close(true);
        };
        
        // add alert to document
        document.body.appendChild(alert);
        
        // cache node and state
        CodeVeinBuilder.cache.alert = alert;
        CodeVeinBuilder.alert.isOpen = true;
        
        // remove class to animate it in
        window.setTimeout(function () {
          if (CodeVeinBuilder.alert.isOpen) {
            CodeVeinBuilder.cache.alert.className = '';
            CodeVeinBuilder.cache.alert.querySelector('#cv-alert-icon').className = '';
          }
        }, 150);
        
        // close the alert after some time
        CodeVeinBuilder.alert.timeout = window.setTimeout(CodeVeinBuilder.alert.close, 4000);
      },
      
      
      // close an alert
      close : function (instant) {
        // delete the timeout
        if (CodeVeinBuilder.alert.timeout) {
          window.clearTimeout(CodeVeinBuilder.alert.timeout);
          delete CodeVeinBuilder.alert.timeout;
        }
        
        if (instant) { // instantly remove the alert
          CodeVeinBuilder.alert.remove();
          
        } else { // gracefully remove the alert with an animation
          CodeVeinBuilder.cache.alert.className = 'alert-closed';
          CodeVeinBuilder.cache.alert.style.opacity = 0;
          CodeVeinBuilder.alert.closeTimeout = window.setTimeout(CodeVeinBuilder.alert.remove, 500);
        }
      },
      
      
      // removes the alert
      remove : function () {
        // delete the close timeout
        if (CodeVeinBuilder.alert.closeTimeout) {
          window.clearTimeout(CodeVeinBuilder.alert.closeTimeout);
          delete CodeVeinBuilder.alert.closeTimeout;
        }
        
        // finally remove the alert
        document.body.removeChild(CodeVeinBuilder.cache.alert);
        CodeVeinBuilder.alert.isOpen = false;
      }
    },
    
    
    // scroll to the specified element
    scrollTo : function (el, parent, offset) {
      if (typeof el == 'string') el = document.querySelector(el);
      if (typeof parent == 'string') parent = document.querySelector(parent);
      offset = offset || 0;
      
      (parent ? parent : document.body).scrollTop = el.offsetTop + offset;
      if (!parent) document.documentElement.scrollTop = el.offsetTop + offset;
    },
    
    
    // functions for opening the item/skill selector and changing items/skills
    selector : {
      isOpen : false,
      
      // opens a window for changing the selected weapon, skill, etc..
      // type : 'weapon' || 'blood_veil' || 'transform' || 'blood_code' || 'passive' || 'active'
      activeCaller : null, // current item/skill being changed
      open : function (type, caller) {
        var block = CodeVeinBuilder.cache.build[caller],
            statCheck, equipped, i, active,
            group = '',
            transform = (caller == 1 || caller == 2 || caller == 3) && CodeVeinBuilder.build[caller + 3] != 0 ? '<div class="ui-transform" style="background-image:url(' + CodeVeinBuilder.getImage('transform', CodeVeinBuilder.build[caller + 3]) + ')"></div>' : '',
            options = 
              '<div '+
                'class="ui-block ui-' + type + '" '+
                'data-type="remove" '+
                'data-id="' + 0 + '" '+
                'onmouseover="CodeVeinBuilder.selector.showInfo(this);" '+
                'onclick="CodeVeinBuilder.selector.change(this, ' + caller + ');" '+
                'title="remove"'+
              '></div>',
            k = 0,
            j = CodeVeinBuilder.data.order[type].length,
            i;
        
        // loop through all options and add them to the options list
        for (; k < j; k++) {
          i = CodeVeinBuilder.data.order[type][k];
          equipped = CodeVeinBuilder.selector.isEquipped(type, i, block.dataset.id);
          statCheck = CodeVeinBuilder.status.check.stats(type, i);
          
          options += 
            '<div '+
              'class="ui-block ui-' + type + (type == 'transform' && block.dataset.id == i ? ' ui-equipped ui-active-selection' : equipped.className) + (statCheck ? ' ' + statCheck : '' ) + '" '+
              'data-type="' + type + '" '+
              'data-id="' + i + '" '+
              equipped.slot+
              'style="background-image:url(' + CodeVeinBuilder.getImage(type, i) + ')" '+
              'onmouseover="CodeVeinBuilder.selector.showInfo(this);" '+
              'onclick="CodeVeinBuilder.selector.change(this, ' + caller + ');" '+
            '>' + transform + '</div>';
        }
        
        // add in a group selector for sorting, if supported by the current selection
        if (CodeVeinBuilder.selector.group[type]) {
          group += '<div class="ui-title ui-groups ui-group-list-' + type + '">';
          
          for (i in CodeVeinBuilder.selector.group[type]) {
            group += '<span class="ui-group-option ui-group-' + CodeVeinBuilder.selector.group[type][i] + (i == 0 ? ' ui-group-active' : '') + '" onclick="CodeVeinBuilder.selector.toggleGroup(\'' + i + '\', this)" style="background-image:url(' + CodeVeinBuilder.getImage('group', CodeVeinBuilder.selector.group[type][i]) + ')"></span>';
          }
          
          group += '</div>';
        }

        CodeVeinBuilder.cache.selector.box.innerHTML = 
          (group ? group : '<div class="ui-title">' + _lang[type] + (/\d/.test(block.id) ? block.id.replace(/.*?-(\d+)/, ' $1') : '') + '</div>')+
          '<div id="selector-options">' + options + '</div>';

        // hide the builder and show the selection screen
        CodeVeinBuilder.selector.isOpen = true;
        CodeVeinBuilder.selector.activeCaller = caller;
        CodeVeinBuilder.cache.buildList.style.display = 'none';
        CodeVeinBuilder.cache.selector.window.style.display = '';
        CodeVeinBuilder.scrollTo(CodeVeinBuilder.cache.selector.window, 0, -5);
        
        // cache selector options
        CodeVeinBuilder.cache.selector.list = document.getElementById('selector-options');
        CodeVeinBuilder.cache.selector.options = CodeVeinBuilder.cache.selector.list.querySelectorAll('.ui-block');
        
        // highlights info for the first item or selected item and scrolls to it
        active = CodeVeinBuilder.cache.selector.list.querySelector('[data-id="' + (block.dataset.id == 0 ? 'A0' : block.dataset.id) + '"]');
        CodeVeinBuilder.selector.showInfo(active);
        CodeVeinBuilder.scrollTo(active, CodeVeinBuilder.cache.selector.list, type == 'blood_code' ? -85 : -95);
      },
      
      
      // closes the selector
      close : function () {
        CodeVeinBuilder.selector.isOpen = false;
        CodeVeinBuilder.selector.activeCaller = null;
        CodeVeinBuilder.cache.buildList.style.display = '';
        CodeVeinBuilder.cache.selector.window.style.display = 'none';
      },
      
      
      // checks if an item/skill is equipped and returns a class if it is
      isEquipped : function (type, id, current) {
        var data = {
          className : '',
          slot : ''
        }, range, i, j;
        
        // transformations don't require this functionality
        if (type != 'transform') {
          
          // return a range of nodes based on the type
          switch (type) {
            case 'blood_code' :
              range = CodeVeinBuilder.cache.build.slice(0, 1);
              break;
              
            case 'weapon' :
              range = CodeVeinBuilder.cache.build.slice(1, 3);
              break;

            case 'blood_veil' :
              range = CodeVeinBuilder.cache.build.slice(3, 4);
              break;

            case 'passive' :
              range = CodeVeinBuilder.cache.build.slice(7, 11);
              break;

            case 'active' :
              range = CodeVeinBuilder.cache.build.slice(11, 19);
              break;
          }

          // loop through the range and find the actively equipped elements
          for (i = 0, j = range.length; i < j; i++) {
            if (range[i].dataset.id == id) {
              data.className = ' ui-equipped' + (id == current ? ' ui-active-selection' : '');
              data.slot = 'data-slot="' + CodeVeinBuilder.cache.build.indexOf(range[i]) + '"';
              break;
            }
          }
        }
        
        return data;
      },
      
      
      // groups for sorting items/skills
      group : {
        weapon : {
          0 : 'all',
          A : '1h',
          B : '2h',
          C : 'halberd',
          D : 'hammer',
          E : 'bayonet'
        },
        
        blood_veil : {
          0 : 'all',
          A : 'ogre',
          B : 'stinger',
          C : 'hounds',
          D : 'ivy'
        },
        
        passive : {
          0 : 'all',
          A : 'buff',
          B : 'def',
          C : 'stats',
          D : 'focus',
          E : 'mastery',
          F : 'misc'
        },
        
        active : {
          0 : 'all',
          A : 'spell',
          B : 'debuff',
          C : 'buff',
          D : 'def',
          E : 'communal',
          F : 'misc'
        }
      },
      
      // toggles the display of skills/items
      toggleGroup : function (id, caller) {
        var active = document.querySelector('.ui-group-active'),
            options = CodeVeinBuilder.cache.selector.options,
            i = 0,
            j = options.length;
        
        // hide/show items/skills
        for (; i < j; i++) {
          if (options[i].dataset.id != 0) { // excludes removal option
            
            // show items/skills that match the id or if the passed id is 0 (show all)
            if ((id == 0 || options[i].dataset.id.charAt(0) == id)) {
              options[i].style.display = '';
            } 
            // hides skills/items that don't begin with the specified id
            else if (options[i].dataset.id.charAt(0) != id) {
              options[i].style.display = 'none';
            }
          }
        }
        
        // update active group icon
        active.className = active.className.replace(' ui-group-active', '');
        caller.className += ' ui-group-active';
        
        // focus first visible gift/item
        for (i = 0; i < j; i++) {
          if (options[i].style.display != 'none' && options[i].dataset.id != 0) {
            active = options[i];
            break;
          }
        }
        
        CodeVeinBuilder.selector.showInfo(active);
      },
      
      
      // changes the active element by moving to the next/prev element
      active : null,
      moveActive : function (pos) {
        var active = CodeVeinBuilder.selector.active,
            list = CodeVeinBuilder.cache.selector.list,
            type = active.dataset.type,
            searching = true;
        
        switch (pos) {
          case 'left' :
            while (searching) { // search for the next active element
              active = active.previousSibling ? active.previousSibling : list.lastChild;
              
              if (active.style.display != 'none') { // cease search when a visible match is found
                searching = false;
              }
            }
            
            CodeVeinBuilder.selector.showInfo(active);
            CodeVeinBuilder.scrollTo(active, list, type == 'blood_code' ? -85 : -95);
            break
            
          case 'right' :
            while (searching) {
              active = active.nextSibling ? active.nextSibling : list.firstChild;
              
              if (active.style.display != 'none') {
                searching = false;
              }
            }
            
            CodeVeinBuilder.selector.showInfo(active);
            CodeVeinBuilder.scrollTo(active, list, type == 'blood_code' ? -85 : -95);
            break;
        }
      },
      
      
      // shows info on a weapon, skill, etc...
      showInfo : function (caller) {
        var type = caller.dataset.type,
            id = caller.dataset.id,
            bottom = '',
            current,
            stats,
            origin,
            i;
        
        if (CodeVeinBuilder.selector.active) {
          CodeVeinBuilder.selector.active.className = CodeVeinBuilder.selector.active.className.replace(' info-active', '');
        }
        
        // shows the item is active in the info section
        CodeVeinBuilder.selector.active = caller;
        caller.className += ' info-active';
        
        // # TOP INFO #
        // shows info on the item
        // top info is name, description and icon
        origin = id == 0 ? null : CodeVeinBuilder.data[type][id].origin;
        
        CodeVeinBuilder.cache.selector.infoTop.innerHTML = id == 0 ? 
          '<div class="' + caller.className.replace(' info-active', '') + '"></div>'+
          '<div class="item-info">'+
            '<div class="item-title">' + _lang.remove + '</div>'+
            '<div class="hr"></div>'+
            '<div class="item-desc">' + _lang.remove_desc + '</div>'+
          '</div>' :
        
          '<div class="' + caller.className.replace(' info-active', '') + '" style="background-image:url(' + CodeVeinBuilder.getImage(type, id) + ');"></div>'+
          '<div class="item-info">'+
            '<div class="item-title">' + CodeVeinBuilder.data[type][id].name + (CodeVeinBuilder.data[type][id].dlc ? ' <span class="tag tag-dlc">' + _lang.dlc + '</span>' : '') + '</div>'+
            '<div class="hr"></div>'+
            (CodeVeinBuilder.data[type][id].owner ? '<div class="code-owner"><span class="t-darker">' + _lang.code_owner + '</span> ' + CodeVeinBuilder.data[type][id].owner + '</div>' : '')+
            (origin ? '<div class="gift-origin"><span class="t-darker">' + _lang.origin + '</span> ' + (/^rvm|^cor/.test(origin) ? _lang[origin.charAt(0) == 'r' ? 'rv_mastery' : 'companion_rank'] + ' (' + origin.slice(3) + ')' : CodeVeinBuilder.data.blood_code[origin].name) + (CodeVeinBuilder.data[type][id].blood_code_req ? ' <span class="tag tag-exclusive" title="' + _lang.exclusive + '"><i class="fa">&#xf005;</i></span>' : '') + '</div>' : '')+
            '<div class="item-desc">' + CodeVeinBuilder.data[type][id].desc + '</div>'+
          '</div>';
        
        
        // # BOTTOM INFO #
        // bottom info contains extended info such as stats, ichor costs, and so on..
        current = id == 0 ? 0 : CodeVeinBuilder.data[type][CodeVeinBuilder.cache.build[CodeVeinBuilder.selector.activeCaller].dataset.id];
        
        /* BLOOD CODE */
        if (type == 'blood_code') {
          var code = CodeVeinBuilder.data[type][id],
              mobility,
              ichorDiff,
              weight;
          
          // currently equipped blood code (defaults to dummy code with no stats)
          current = current ? current : CodeVeinBuilder.data.dummy.blood_code;
          
          // ichor difference
          ichorDiff = code.ichor.min > current.ichor.min ? ' stat-good' :
                      code.ichor.min < current.ichor.min ? ' stat-bad' :
                      '';
          
          // converted mobility values
          mobility = {
            current : CodeVeinBuilder.status.mobiKey[current.mobility],
            hover : CodeVeinBuilder.status.mobiKey[code.mobility]
          };
          
          // current/hover max weight
          weight = {
            current : _parseVal(current.weight * (CodeVeinBuilder.status.weight.max_multiplier || 1)),
            hover : _parseVal(code.weight * (CodeVeinBuilder.status.weight.max_multiplier || 1))
          };
          
          // top stats (e.g. base mobility, ichor, and if we ever add anything else such as HP)
          bottom += 
            '<div class="info-group">'+
              '<div class="info-row">'+
                '<span class="info-label">' + _lang.ichor + '</span>'+
                '<span class="info-value">' + code.ichor.min + ' (' + code.ichor.max + ')' + (ichorDiff ? ' <span class="' + ichorDiff + '">(' + (ichorDiff == ' stat-good' ? '+' : '-') + Math.abs(code.ichor.min - current.ichor.min) + ')' : '') + '</span></span>'+
              '</div>'+
            
              '<div class="info-row">'+
                '<span class="info-label">' + _lang.mobi.base + '</span>'+
                '<span class="info-value' + (mobility.hover > mobility.current ? ' stat-good' : mobility.hover < mobility.current ? ' stat-bad' : '') + '">' + code.mobility + '</span>'+
              '</div>'+
            
              '<div class="info-row">'+
                '<span class="info-label">' + _lang.weight_limit + '</span>'+
                '<span class="info-value">' + weight.hover + ( weight.hover == weight.current ? '' : ' <span class="' + (weight.hover > weight.current ? 'stat-good' : weight.hover < weight.current ? 'stat-bad' : '') + '">(' + (weight.hover > weight.current ? '+' : weight.hover < weight.current ? '-' : '') + _parseVal(Math.abs(weight.hover - weight.current)) + ')</span>' ) + '</span>'+
              '</div>'+
            '</div>'+
            '<div class="info-group">';
          
          // bottoms stats (scaling stats)
          for (i in code.stats) {
            stats = code.stats[i];
            bottom +=
              '<div class="info-row">'+
                '<span class="info-label"><span class="t-darker">' + i.toUpperCase() + '</span> ' + _lang[i] + '</span>'+
                '<span class="info-value' + (stats > current.stats[i] ? ' stat-good' : stats < current.stats[i] ? ' stat-bad' : '') + '">' + CodeVeinBuilder.status.key[stats > 12 ? 12 : stats] + '</span>'+
              '</div>';
          }
          
          bottom += '</div>';
          
          // weight/mobility
          var currentWeight = CodeVeinBuilder.status.get.weight(),
              newWeight = {},
              mobility;

          // make a clone of the current weight data and add the hovered code's weight to it
          for (i in CodeVeinBuilder.status.weight) {
            newWeight[i] = i == 'max' ? code.weight : CodeVeinBuilder.status.weight[i];
          }
          // once cloned, get the new weight values
          newWeight = CodeVeinBuilder.status.get.weight(newWeight, code);
          
          // get the mobility for new and current weight for comparisons
          mobility = {
            current : [CodeVeinBuilder.status.mobiKey[currentWeight.mobility_1], CodeVeinBuilder.status.mobiKey[currentWeight.mobility_2]],
            hover : [CodeVeinBuilder.status.mobiKey[newWeight.mobility_1], CodeVeinBuilder.status.mobiKey[newWeight.mobility_2]]
          };

          bottom += '<div class="info-group">'+
            // weapon 1 mobility
            '<div class="info-row">'+
              '<span class="info-label">' + _lang.mobility + ' 1</span>'+
              '<span class="info-value"><span class="' + (mobility.hover[0] > mobility.current[0] ? 'stat-good' : mobility.hover[0] < mobility.current[0] ? 'stat-bad' : '') + '">' + newWeight.mobility_1 + '</span> (' + currentWeight.total_1 + '/' + newWeight.max + ')</span>'+
            '</div>'+
            
            // weapon 2 mobility
            '<div class="info-row">'+
              '<span class="info-label">' + _lang.mobility + ' 2</span>'+
              '<span class="info-value"><span class="' + (mobility.hover[1] > mobility.current[1] ? 'stat-good' : mobility.hover[1] < mobility.current[1] ? 'stat-bad' : '') + '">' + newWeight.mobility_2 + '</span> (' + currentWeight.total_2 + '/' + newWeight.max + ')</span>'+
            '</div>'+
          '</div>';
        }
        
        /* EQUIPMENT */
        else if (/weapon|blood_veil/.test(type)) {
          // get the current item's scaling or setup a dummy
          current = current ? current.scaling : CodeVeinBuilder.data.dummy.equipment.scaling;
          
          // stat scaling
          bottom += '<div class="info-group"><div class="info-group-title">' + _lang.stat_scaling + '</div>';
          
          for (i in CodeVeinBuilder.status.stats) {
            stats = CodeVeinBuilder.data[type][id].scaling[i];
            bottom +=
              '<div class="info-row">'+
                '<span class="info-label"><span class="t-darker">' + i.toUpperCase() + '</span> ' + _lang[i] + '</span>'+
                '<span class="info-value' + (stats > current[i] ? ' stat-good' : stats < current[i] ? ' stat-bad' : '') + '">' + CodeVeinBuilder.status.key[stats > 12 ? 12 : stats] + '</span>'+
              '</div>';
          }
          
          bottom += '</div>';
          
          // required stats
          if (CodeVeinBuilder.data[type][id].required) {
            bottom += '<div class="info-group required-stats"><div class="info-group-title">' + _lang.required_stats + '</div>';
            
            for (i in CodeVeinBuilder.data[type][id].required) {
              stats = CodeVeinBuilder.data[type][id].required[i];
              bottom +=
                '<div class="info-row">'+
                  '<span class="info-label"><span class="t-darker">' + i.toUpperCase() + '</span> ' + _lang[i] + '</span>'+
                  '<span class="info-value' + (CodeVeinBuilder.status.stats[i] < stats ? ' stat-bad' : '') + '">' + CodeVeinBuilder.status.key[stats > 12 ? 12 : stats] + '</span>'+
                '</div>';
            }
            
            bottom += '</div>';
            
            // weight/mobility
            var selected = CodeVeinBuilder.selector.activeCaller,
                currentWeight = CodeVeinBuilder.status.get.weight(),
                newWeight = {},
                mobility, weight_1, weight_2;
            
            // make a clone of the current weight data and add the hovered item's weight to it
            for (i in CodeVeinBuilder.status.weight) {
              newWeight[i] = (i == 'weapon_1' && selected == 1 || i == 'weapon_2' && selected == 2 || i == 'blood_veil' && selected == 3) ? CodeVeinBuilder.data[type][id].weight : CodeVeinBuilder.status.weight[i];
            }
            // once cloned, get the new weight values
            newWeight = CodeVeinBuilder.status.get.weight(newWeight);
            
            // get the mobility for new and current weight for comparisons
            mobility = {
              current : [CodeVeinBuilder.status.mobiKey[currentWeight.mobility_1], CodeVeinBuilder.status.mobiKey[currentWeight.mobility_2]],
              hover : [CodeVeinBuilder.status.mobiKey[newWeight.mobility_1], CodeVeinBuilder.status.mobiKey[newWeight.mobility_2]]
            };
            
            // current and new weapon values used to show differences
            weight_1 = selected == 1 ? currentWeight.weapon_1 : selected == 2 ? currentWeight.weapon_2 : currentWeight.blood_veil;
            weight_2 = selected == 1 ? newWeight.weapon_1 : selected == 2 ? newWeight.weapon_2 : newWeight.blood_veil;
            
            bottom += '<div class="info-group">'+
              // item weight
              '<div class="info-row">'+
                '<span class="info-label">' + _lang.weight + '</span>'+
                '<span class="info-value">' + weight_2 + (weight_2 == weight_1 ? '' : ' <span class="' + (weight_2 > weight_1 ? 'stat-bad' : weight_2 < weight_1 ? 'stat-good' : '') + '">(' + (weight_2 > weight_1 ? '+' : weight_2 < weight_1 ? '-' : '') + _parseVal(Math.abs(weight_1 - weight_2)) + ')</span>') + '</span>'+
              '</div>'+
              
              // weapon 1 mobility
              ((selected == 1 || selected == 3) ? '<div class="info-row">'+
                '<span class="info-label">' + _lang.mobility + ' 1</span>'+
                '<span class="info-value"><span class="' + (mobility.hover[0] > mobility.current[0] ? 'stat-good' : mobility.hover[0] < mobility.current[0] ? 'stat-bad' : '') + '">' + newWeight.mobility_1 + '</span> (' + newWeight.total_1 + '/' + newWeight.max + ')</span>'+
              '</div>' : '')+
              
              // weapon 2 mobility
              ((selected == 2 || selected == 3) ? '<div class="info-row">'+
                '<span class="info-label">' + _lang.mobility + ' 2</span>'+
                '<span class="info-value"><span class="' + (mobility.hover[1] > mobility.current[1] ? 'stat-good' : mobility.hover[1] < mobility.current[1] ? 'stat-bad' : '') + '">' + newWeight.mobility_2 + '</span> (' + newWeight.total_2 + '/' + newWeight.max + ')</span>'+
              '</div>' : '')+
            '</div>';
          }
        }
        
        /* PASSIVES */
        else if (type == 'passive') {
          var passive = CodeVeinBuilder.data[type][id];
          bottom += 
            '<div class="info-row">'+
              '<span class="info-sub-group">'+
                '<span class="info-label">' + _lang.tree.title + '</span>'+
                '<span class="info-value">' + passive.tree + '</span>'+
              '</span>'+
            
              '<span class="info-sub-group">'+
                '<span class="info-label">' + _lang.gift_type + '</span>'+
                '<span class="info-value">' + _lang.passive + '</span>'+
              '</span>'+
            '</div>'+
            '<div class="hr"></div>'+
            (passive.usage_req ?
             '<div class="skill-info-list">'+
                '<div class="info-row">'+
                  '<span class="info-label">' + _lang.usage_req + '</span>'+
                  '<span class="info-value' + (passive.blood_code_req && CodeVeinBuilder.build[0] != passive.blood_code_req ? ' stat-bad' : '') + '">' + passive.usage_req + '</span>'+
                '</div>'+
             '</div>'+
             '<div class="hr"></div>':
             ''
            )+
            '<div class="info-group">'+
              '<div class="info-group-title"><span class="t-darker">' + _lang.required_stats + '</span></div>'+
              '<div class="info-row">'+
                '<span class="info-label no-value">' + _lang.none + '</span>'+
              '</div>'+
            '</div>';
        }
        
        /* ACTIVES */
        else if (type == 'active') {
          var active = CodeVeinBuilder.data[type][id],
              wep_req = '',
              k;
          
          // weapon requirements for skill-based Gifts
          if (active.weapon_req) {
            // loop through the weapon group list to setup the weapon requirement icons
            for (k in CodeVeinBuilder.selector.group.weapon) {
              // ignore 0 or "all"
              if (k != 0) {
                // add the weapon icon along with a class to show if the weapon is compatible with the current Gift
                wep_req += '<img src="' + CodeVeinBuilder.getImage('group', CodeVeinBuilder.selector.group.weapon[k]) + '" class="weapon-' + (active.weapon_req.indexOf(k) != -1 ? 'valid' : 'invalid') + '" title="' + _lang[CodeVeinBuilder.selector.group.weapon[k]] + '">';
              }
            }
          }
          
          // tree and type info
          bottom += 
            '<div class="info-row">'+
              '<span class="info-sub-group">'+
                '<span class="info-label">' + _lang.tree.title + '</span>'+
                '<span class="info-value">' + CodeVeinBuilder.data[type][id].tree + (wep_req ? '<span class="weapon-requirement">' + wep_req +  '</span>' : '') + '</span>'+
              '</span>'+
            
              '<span class="info-sub-group">'+
                '<span class="info-label">' + _lang.gift_type + '</span>'+
                '<span class="info-value">' + _lang.active + '</span>'+
              '</span>'+
            '</div>'+
            '<div class="hr"></div>';
          
          // usage info such as ichor cost, cooldown, etc...
          bottom += '<div class="skill-info-list">';
          for (i in CodeVeinBuilder.data.dummy.active) {
            bottom += 
              '<div class="info-row">'+
                '<span class="info-label">' + _lang[i] + '</span>'+
                '<span class="info-value' + (i == 'usage_req' && active.blood_code_req && CodeVeinBuilder.build[0] != active.blood_code_req ? ' stat-bad' : '') + '">' + (active[i] ? active[i] + (i == 'cooldown' ? ' ' + _lang.seconds : '') : '-') + '</span>'+
              '</div>';
          }
          bottom += '</div><div class="hr"></div>';
          
          // required stats
          bottom += 
            '<div class="info-group skill-info-list">'+
              '<div class="info-group-title"><span class="t-darker">' + _lang.required_stats + '</span></div>';
          
          if (active.required) {
            for (i in active.required) {
              stats = active.required[i];
              bottom +=
                '<div class="info-row">'+
                  '<span class="info-label"><span class="t-darker">' + i.toUpperCase() + '</span> ' + _lang[i] + '</span>'+
                  '<span class="info-value' + (CodeVeinBuilder.status.stats[i] < stats ? ' stat-bad' : '') + '">' + CodeVeinBuilder.status.key[stats > 12 ? 12 : stats] + '</span>'+
                '</div>';
            }
            
            bottom += '</div>';
            
          } else {
            bottom +=
                '<div class="info-row">'+
                  '<span class="info-label no-value">' + _lang.none + '</span>'+
                '</div>'+
              '</div>';
          }

        }
        
        CodeVeinBuilder.cache.selector.infoBottom.innerHTML = type == 'transform' || id == 0 ? '' : '<div class="ui-window-inner' + (/active|passive/.test(type) ? ' skill-info' : /weapon|blood_/.test(type) ? ' status-info' : '') + '">' + bottom + '</div>';
      },
      
      
      // changes the selected weapon, skill, etc...
      change : function (selected, caller) {
        var type = selected.dataset.type,
            id = selected.dataset.id,
            block = CodeVeinBuilder.cache.build[caller],
            current = block.dataset.id,
            statsChanged,
            block2;
        
        // update stats
        // object refers to caller id for blood code and passives 1-4, and returns "1" aka "true" when matched
        // this is so stat removal can be processed, because type is set as "remove" when removing something
        if ({0:1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10:1}[caller] && (!selected.dataset.slot || {1:1, 2:1}[caller]) && id != current) {
          CodeVeinBuilder.status.update({
            type : caller,
            id : id,
            oldId : current
          });
          
          // used for swapping weapon weight from one slot to the other
          if (selected.dataset.slot && {1:1, 2:1}[caller]) {
            CodeVeinBuilder.status.update({
              type : caller == 1 ? 2 : 1,
              id : current,
              oldId : id
            });
          }
          
          statsChanged = true;
        }
        
        // swap items if they're already equipped into a slot
        if (selected.dataset.slot && !/ui-active-selection/.test(selected.className)) {
          block2 = CodeVeinBuilder.cache.build[selected.dataset.slot];
          current = block.dataset.id;
          
          CodeVeinBuilder.build[selected.dataset.slot] = current;
          block2.dataset.id = current;
          block2.style.backgroundImage = block.style.backgroundImage ? 'url(' + CodeVeinBuilder.getImage(type, current) + ')' : '';
        } 
        
        // apply item to the selected slot
        CodeVeinBuilder.build[caller] = id;
        block.dataset.id = id;
        block.style.backgroundImage = type == 'remove' ? '' : 'url(' + CodeVeinBuilder.getImage(type, id) + ')';
        
        // update status display
        if (statsChanged) {
          CodeVeinBuilder.status.display();
        }
        
        // check if equipped items/skills meet their stat requirements
        CodeVeinBuilder.status.check.equipped();
        
        // close the selector
        CodeVeinBuilder.selector.close();
        
        // only update the URL if there was a change to prevent identical states
        if (id != current) {
          CodeVeinBuilder.updateURL();
          
          // empty description if the build changes
          if (CodeVeinBuilder.cache.buildDesc.firstChild) {
            CodeVeinBuilder.updateDesc(0);
          }
        }
      }
    },
    
    
    // loads an existing build from a query string (apply below example to the url)
    // ?build=IIBgPqYEIIwQLGclhxTRBhcmAcFk4ocAmfAEXAFE5M4AxEIA
    loadBuild : function () {
      var params = window.location.search.slice(1).split('&'),
          i = 0,
          j = params.length,
          pair, build, context, buildData;
      
      // loop through url params and apply the values
      for (; i < j; i++) {
        pair = params[i].split('=');
        
        // apply the build
        if (/build/i.test(pair[0])) {
          build = LZString.decompressFromEncodedURIComponent(pair[1]).split('|');
          
          CodeVeinBuilder.build = build;

          for (var k = 0, l = build.length, block, type; k < l; k++) {
            block = CodeVeinBuilder.cache.build[k];
            type = block.dataset.type;
            block.dataset.id = build[k];
            block.style.backgroundImage = build[k] == 0 ? '' : 'url(' + CodeVeinBuilder.getImage(type, build[k]) + ')';

            // update stats
            if (build[k] != 0 && /blood_code|passive|weapon|blood_veil|transform/.test(type)) {
              CodeVeinBuilder.status.update({
                type : k,
                id : build[k]
              });
            }
          }
        } 
        
        // loads context data for preset builds
        else if (/context/i.test(pair[0])) {
          try {
            context = LZString.decompressFromEncodedURIComponent(pair[1])
                      .replace(/^\d+ - /, '') // removes number prefix on legacy links (this ordering system was deprecated on 2/4/20)
                      .split('|');
            
            buildData = CodeVeinBuilder.presets[context[0]][context[1]];

            CodeVeinBuilder.updateDesc({
              title : context[1],
              desc : buildData[1],
              author : buildData[2] ? buildData[2].split('|') : ''
            });
            
          } catch (e) {
            console.error(e);
            CodeVeinBuilder.updateDesc(0);
          }
        }
      }
      
      // hide description if no context found
      if (!context && CodeVeinBuilder.cache.buildDesc.firstChild) {
        CodeVeinBuilder.updateDesc(0);
      }
      
      // update status display after everything has been applied
      CodeVeinBuilder.status.display();
      
      // checks if equipped items/skills meet their requirements
      CodeVeinBuilder.status.check.equipped();
    },
    
    
    // applies a random build
    randBuild : function () {
      var i = 0,
          j = CodeVeinBuilder.build.length, key, stats, code_req,
          selected = {
            weapon : [],
            passive : [],
            active : []
          };

      for (; i < j; i++) {
        // blood code
        if (i == 0) {
          CodeVeinBuilder.build[i] = _randKey(CodeVeinBuilder.data.blood_code);

          // this is used to apply Gifts/Equipment within the blood code's parameters
          stats = CodeVeinBuilder.data.blood_code[CodeVeinBuilder.build[0]].stats;
        }


        // weapon
        else if (i == 1 || i == 2) {             
          while (true) {
            key = _randKey(CodeVeinBuilder.data.weapon);

            if (selected.weapon.indexOf(key) == -1 && CodeVeinBuilder.status.check.stats('weapon', key, stats) == '') {
              CodeVeinBuilder.build[i] = key;
              selected.weapon.push(key);
              break;
            }
          }
        }

        // blood_veil
        else if (i == 3) {
          while (true) {
            key = _randKey(CodeVeinBuilder.data.blood_veil);

            if (CodeVeinBuilder.status.check.stats('blood_veil', key, stats) == '') {
              CodeVeinBuilder.build[i] = key;
              break;
            }
          }
        }

        // transform
        else if (i == 4 || i == 5 || i == 6) {
          CodeVeinBuilder.build[i] = Math.floor(Math.random() * 2) == 0 ? 0 : _randKey(CodeVeinBuilder.data.transform);
        }
        
        // passive
        else if (i == 7 || i == 8 || i == 9 || i == 10) {
          while (true) {
            key = _randKey(CodeVeinBuilder.data.passive);
            code_req = CodeVeinBuilder.data.passive[key].blood_code_req;

            if (selected.passive.indexOf(key) == -1 && (!code_req || code_req == CodeVeinBuilder.build[0])) {
              CodeVeinBuilder.build[i] = key;
              selected.passive.push(key);
              break;
            }
          }
        }

        // active
        else if (i == 11 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16 || i == 17 || i == 18) {
          while (true) {
            key = _randKey(CodeVeinBuilder.data.active);
            code_req = CodeVeinBuilder.data.active[key].blood_code_req;

            if (selected.active.indexOf(key) == -1 && CodeVeinBuilder.status.check.stats('active', key, stats) == '' && (!code_req || code_req == CodeVeinBuilder.build[0])) {
              CodeVeinBuilder.build[i] = key;
              selected.active.push(key);
              break;
            }
          }
        }
      }
    },
    
    
    // updates the URL with the build
    updateURL : function (context) {
      // check compatibility before pushing a new history state with the build change
      if (window.history && window.history.pushState) {
        
        // check and get the lang query if present in location search
        var lang = '';
        if (/lang=/i.test(window.location.search) || (window.localStorage && localStorage.cvbLang)) {
          lang = /lang=/i.test(window.location.search) ? window.location.search.match(/lang=.*?(?:&|$)/i) : 'lang=' + localStorage.cvbLang;
          
          if (lang && lang[0]) {
            lang = '&' + (/lang=/i.test(window.location.search) ? lang[0] : lang);
          }
        }
        
        // push new history state
        window.history.pushState({}, document.title, window.location.href.replace(window.location.search, '') + '?build=' + LZString.compressToEncodedURIComponent(CodeVeinBuilder.build.join('|')) + (/devmode=true/i.test(window.location.search) ? '&devmode=true' : '') + lang + (context ? '&context=' + LZString.compressToEncodedURIComponent(context.join('|')) : ''));
      }
    },
    
    
    // update build description
    updateDesc : function (data) {
      if (!data) {
        CodeVeinBuilder.cache.buildDesc.innerHTML = '';
        
      } else {
        var reddit = /u\//.test(data.author[0]);

        CodeVeinBuilder.cache.buildDesc.innerHTML = '<div class="ui-window">'+
          '<div class="ui-title">' + data.title + '</div>'+
          '<div class="ui-window-inner">'+
            '<div class="info-group">'+
              (data.author[0] ? '<div class="info-row">'+
                '<div class="info-label">' + _lang.preset_author + '</div>'+
                '<div class="info-value"><a href="' + (reddit ? 'https://reddit.com/' : 'https://github.com/') + data.author[0] + '" target="_blank">'+ data.author[0] + '</a></div>'+
              '</div>' : '')+

              (data.author[1] ? '<div class="info-row">'+
                '<div class="info-label">' + _lang.preset_origin + '</div>'+
                '<div class="info-value"><a href="' + (reddit ? 'https://reddit.com/r/codevein/comments/dyrpbu/c/' : 'https://github.com/SethClydesdale/code-vein-builder/issues/') + data.author[1] + '" target="_blank">' + (reddit ? 'reddit' : 'github') + '</a></div>'+
              '</div>' : '')+

              (data.desc ? '<div class="info-row">'+
                '<div class="info-label">' + _lang.preset_desc + '</div>'+
                '<div class="info-value">'+ data.desc + '</div>'+
              '</div>' : '')+
            '</div>'+
          '</div>'+
        '</div>';
      }
    },
    
    
    // returns an image with the given params
    getImage : function (type, id) {
      if (type == 'group' || CodeVeinBuilder.data[type][id]) {
        return 'resources/images/' + type + '/' + (type == 'group' ? id : CodeVeinBuilder.data[type][id].image) + '.png';
        
      } else {
        console.error('getImage Error: id "' + id + '" of type "' + type + '" was not found.'); 
      }
    },
    
    
    // preset functionality
    preset : {
      // shows a prompt before applying the preset (skips prompt if preferred)
      change : function (select) {
        var build = select.options[select.selectedIndex];

        if (build.value != 'default') {
          
          // redirect to submission page if "submit a build" was selected
          if (build.value == 'submit') {
            GenkiModal.open({
              title : build.innerHTML,
              content : _lang.preset_submit_confirm,

              callback : function () {
                var fileSys = window.location.protocol == 'file:',
                    href = window.location.href.replace(/\?.*?$/, '');

                window.location.href = fileSys ? href.replace('index.html', 'submit-build/index.html') : href + 'submit-build/';
              },

              close : function () {
                select.selectedIndex = 0;
              }
            });

            return;
          }
          
          if (window.localStorage && localStorage.noPresetWarning == 'true') {
            CodeVeinBuilder.preset.load(select, build);
            
          } else {
            GenkiModal.open({
              title : 'Load Preset?',
              content : _lang.preset_warn.replace('%{PRESET_NAME}', build.innerHTML)+
              '<div class="checkbox-zone">'+
                '<label for="preset_warning"><input id="preset_warning" type="checkbox" onchange="localStorage.noPresetWarning = this.checked;"> ' + _lang.preset_stop_warning + '</label>'+
              '</div>',

              callback : function () {
                CodeVeinBuilder.preset.load(select, build);
              },

              close : function () {
                select.selectedIndex = 0;
              }
            });
          }
          
        }
      },
      
      
      // loads the selected preset
      load : function (select, build) {
        var context = build.dataset.group ? [build.dataset.group, build.innerHTML] : null,
            buildData = context ? CodeVeinBuilder.presets[context[0]][context[1]] : '';
        
        // puts together a random build, if selected
        if (build.value == 'random') {
          CodeVeinBuilder.randBuild();
        }
        
        // standard preset build application
        else {
          CodeVeinBuilder.build = LZString.decompressFromEncodedURIComponent(build.value).split('|');
        }
        
        // build descriptions
        if (typeof buildData != 'string') {
          CodeVeinBuilder.updateURL(context);
          CodeVeinBuilder.updateDesc({
            title : context[1],
            desc : buildData[1],
            author : buildData[2] ? buildData[2].split('|') : ''
          });
          

        } else {
          CodeVeinBuilder.updateURL();
          CodeVeinBuilder.updateDesc(0);
        }
        
        CodeVeinBuilder.status.reset();
        CodeVeinBuilder.loadBuild();
        CodeVeinBuilder.scrollTo('#build-list');

        select.selectedIndex = 0;
      }
    },
    
    
    // changes the selected language
    changeLanguage : function (select) {
      var lang = select.options[select.selectedIndex].value, fileSys, href;
      
      // redirect to translation page if "submit a translation" was selected
      if (lang == 'submit') {
        GenkiModal.open({
          title : select.options[select.selectedIndex].innerHTML,
          content : _lang.submit_translation_confirm,
          
          callback : function () {
            fileSys = window.location.protocol == 'file:';
            href = window.location.href.replace(/\?.*?$/, '');

            window.location.href = fileSys ? href.replace('index.html', 'translate/index.html') : href + 'translate/';
          },
          
          close : function () {
            select.selectedIndex = document.getElementById('default-selected').index;
          }
        });
        
        return;
      }
      
      // standard language switching
      if (lang != 'en') {
        if (/lang=/i.test(window.location.search)) {
          window.location.search = window.location.search.replace(/lang=.*?(?:&|$)/i, 'lang=' + lang)

        } else if (/build=/i.test(window.location.search)) {
          window.location.search = window.location.search + '&lang=' + lang;

        } else {
          window.location.search = '?lang=' + lang;
        }
        
      } else {
        window.location.href = window.location.href.replace(/(&|\?|)lang=.*?(?:&|$)/, '');
      }
      
      if (window.localStorage) {
        window.localStorage.cvbLang = lang;
      }
    },
    
    
    // options for sharing or loading a build code
    code : {
      // offers options for sharing your build
      save : function () {
        GenkiModal.open({
          title : _lang.save_build,
          content : '<div class="info-group">' + _lang.save_build_desc + '</div>'+
            '<div class="share-build-options">'+
              '<div class="info-group">'+
                '<div class="info-label"><button class="button copy-button" data-clipboard-target="#copy-url" data-success="' + _lang.copy_success + '" data-original="' + _lang.copy_url + '">' + _lang.copy_url + '</button></div>'+
                '<div class="info-value"><input type="text" id="copy-url" value="' + (window.location.protocol == 'file:' ? 'https://sethclydesdale.github.io/code-vein-builder/' + window.location.search : window.location.href) + '"></div>'+
              '</div>'+
              '<div>'+
                '<div class="info-label"><button class="button copy-button" data-clipboard-target="#copy-code" data-success="' + _lang.copy_success + '" data-original="' + _lang.copy_code + '">' + _lang.copy_code + '</button></div>'+
                '<div class="info-value"><input type="text" id="copy-code" value="' + LZString.compressToEncodedURIComponent(CodeVeinBuilder.build.join('|')) + '"></div>'+
              '</div>'+
            '</div>',
          noFocus : 1
        });
      },
      
      
      // lets you load a build using a code/url
      load : function () {
        GenkiModal.open({
          title : _lang.load_build,
          content : '<div class="info-group">' + _lang.load_build_desc + '</div>'+
            '<div class="share-build-options load-build">'+
              '<div class="info-label">' + _lang.load_build_label + '</div>'+
              '<div class="info-value"><input type="text" id="build_code"></div>'+
            '</div>',
          
          buttonText : _lang.load_build,
          focus : '#build_code',
          keepOpen : 1,
          
          callback : function () {
            var code = document.getElementById('build_code').value, context;
            
            // error if no code/url
            if (!code) {
              return alert(_lang.load_build_error);
            }
            
            // finds the build code in an url
            if (/build=/i.test(code)) {
              context = code.match(/context=(.*?)(?:&|$)/i);
              code = code.match(/build=(.*?)(?:&|$)/i);
              
              // build code
              if (code && code[1]) {
                code = code[1];
              }
              
              // build context (e.g. author, description..)
              if (context && context[1]) {
                context = context[1];
              }
            }
            
            // try loading the build
            try {
              CodeVeinBuilder.build = LZString.decompressFromEncodedURIComponent(code).split('|');
              CodeVeinBuilder.updateURL(context ? LZString.decompressFromEncodedURIComponent(context).split('|') : '');
              CodeVeinBuilder.status.reset();
              CodeVeinBuilder.loadBuild();
              GenkiModal.close();
              CodeVeinBuilder.scrollTo('#build-list');
              
            } catch (error) {
              alert(error);
            }
          }
        });
      }
    },
    
    
    // set up of background data such as language and object data
    setupData : function (lang) {
      var script = document.createElement('SCRIPT');
      script.src = 'resources/lang/' + lang + '/lang' + (/devmode=true/i.test(window.location.search) ? '' : '.min') + '.js';
      
      // load object data after language data is loaded
      script.onload = function () {
        script = document.createElement('SCRIPT');
        script.src = 'resources/javascript/data.min.js';
        
        // load preset builds after object data is loaded
        script.onload = function () {
          script = document.createElement('SCRIPT');
          script.src = 'resources/javascript/presets.min.js';
          
          // run initial setup after background data is loaded
          script.onload = function () {
            CodeVeinBuilder.init(lang);
          }; 
          
          document.body.appendChild(script);
        };

        document.body.appendChild(script);
        document.body.className += ' lang-' + lang; // add special class to body for language specific modifications
        document.documentElement.lang = lang;
      };
      
      // load default english language if the selected language cannot be found
      script.onerror = function () {
        CodeVeinBuilder.setupData('en');
      }

      document.body.appendChild(script);
    },
    
    
    // initial setup of the user interface and it's functionality
    init : function (lang) {
      // checks if a build is present in the URL and loads it
      if (/build=/i.test(window.location.search)) {
        CodeVeinBuilder.loadBuild();
        CodeVeinBuilder.scrollTo('#build-list');
      }
      
      // applies a random build on the first visit, if ?random is the first param appended to the URL
      else if (/^\?random/.test(window.location.search)) {
        CodeVeinBuilder.randBuild();
        CodeVeinBuilder.updateURL();
        CodeVeinBuilder.loadBuild();
        CodeVeinBuilder.scrollTo('#build-list');
      }

      // otherwise do an initial status display setup
      else {
        CodeVeinBuilder.status.display();
      }
      
      
      // setup options window
      var options = '',
          presets = '<option value="default" selected>' + _lang.preset_default + '</option>'+
                    '<option value="submit">' + _lang.preset_submit + '</option>'+
                    '<optgroup label="'+ _lang.preset_group.initial +'">'+
                      '<option value="AwH17SOrZ4g">' + _lang.preset_empty + '</option>'+
                      '<option value="random">' + _lang.preset_random + '</option>'+
                    '</optgroup>',
          key, group,
          i, j, k;
      
      // compile language list with the actively selected language
      for (i in CodeVeinBuilder.languages) {
        key = i.replace(/^\d+ - /, '');
        options += '<option value="' + CodeVeinBuilder.languages[i] + '"' + (((lang && lang == CodeVeinBuilder.languages[i]) || !lang && CodeVeinBuilder.languages[i] == 'en') ? ' id="default-selected" selected' : '') + '>' + (key == 'submit_translation' ? _lang[key] : key) + '</option>';
      }
      
      // compile presets
      for (i = 0, j = CodeVeinBuilder.presetsOrder.length; i < j; i++) {
        key = CodeVeinBuilder.presetsOrder[i],
        group = CodeVeinBuilder.presets[key];
        presets += '<optgroup label="' + _lang.preset_group[key] + '">';
        
        for (k in group) {
          presets += '<option value="' + (typeof group[k] === 'string' ? group[k] : group[k][0]) + '" data-group="' + key + '">' + k + '</option>';
        }
        
        presets += '</optgroup>';
      }
      
      // options section
      CodeVeinBuilder.cache.infoColumn.options.innerHTML = 
        '<div class="ui-window">'+
          '<div class="ui-title">' + _lang.options + '</div>'+
          '<div class="ui-window-inner">'+
            // share/load build buttons
            '<div class="info-group center">'+
              '<div class="info-row">'+
                '<button class="button" onclick="CodeVeinBuilder.code.save();"><i class="fa">&#xf0c7;</i>' + _lang.save_build + '</button>'+
                '<button class="button" onclick="CodeVeinBuilder.code.load();"><i class="fa">&#xf019;</i>' + _lang.load_build + '</button>'+
              '</div>'+
              // preset build selector
              '<div class="info-row">'+
                '<select onchange="CodeVeinBuilder.preset.change(this);">' + presets + '</select>'+
              '</div>'+
            '</div>'+
        
            // language selector
            '<div class="info-group">'+
              '<div class="info-row">'+
                '<div class="info-label">' + _lang.lang_select + '</div>'+
                '<div class="info-value">'+
                  '<select onchange="CodeVeinBuilder.changeLanguage(this);">' + options + '</select>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
      

      // loads builds whenever the window state changes (back/forward)
      window.onpopstate = function() {
        if (/build=/i.test(window.location.search)) {
          CodeVeinBuilder.status.reset(); // reset stats since they need to be fresh for loadBuild
          CodeVeinBuilder.loadBuild();

          // close the selector if it is open
          if (CodeVeinBuilder.selector.isOpen) {
            CodeVeinBuilder.selector.close();
          }
          
          // close modal if open
          if (GenkiModal.isOpen) {
            GenkiModal.close();
          }
        }
      };
      
      
      // copy button functionality for the build url/code
      new ClipboardJS('.copy-button').on('success', function (e) {
        var trigger = e.trigger;
        
        if (trigger.innerHTML != trigger.dataset.success) {
          trigger.innerHTML = trigger.dataset.success;

          window.setTimeout(function() {
            trigger.innerHTML = trigger.dataset.original;
          }, 1000);
        }
      });
      
      
      // enables keyboard events for the equipment selector
      document.onkeydown = function (e) {
        if (CodeVeinBuilder.selector.isOpen) {
          switch (e.key) {
            // cycle through options
            case 'Left' :
            case 'ArrowLeft' :
              CodeVeinBuilder.selector.moveActive('left');
              e.preventDefault();
              break;

            case 'Right' :
            case 'ArrowRight' :
              CodeVeinBuilder.selector.moveActive('right');
              e.preventDefault();
              break;
              
            // cycle through groups
            case 'Spacebar' :
            case ' ' :
              var active = document.querySelector('.ui-group-active');
              
              if (active) {
                if (active.nextSibling) {
                  active.nextSibling.click();
                } else {
                  document.querySelector('.ui-group-all').click();
                }
              }
              
              e.preventDefault();
              break;
              
            // select skill/equipment
            case 'Enter' :
              CodeVeinBuilder.selector.change(CodeVeinBuilder.selector.active, CodeVeinBuilder.selector.activeCaller);
              e.preventDefault();
              break
              
            // closes the selector
            case 'Esc' :
            case 'Escape' :
              CodeVeinBuilder.selector.close();
              e.preventDefault();
              break;
            
            // RESERVED FOR POSSIBLE FUTURE IMPLEMENTATION
            // Up/Down for the next element is a little difficult to calcuate atm
            // so for now we'll prevent default functionality to prevent the page from moving up/down
            case 'Up' :
            case 'ArrowUp' :
              e.preventDefault();
              break;
              
            case 'Down' :
            case 'ArrowDown' :
              e.preventDefault();
              break;
          }
        }
      }
    }
  };
  
  
  // load language data if a language is specified in location.search
  if (/lang=/i.test(window.location.search) || (window.localStorage && localStorage.cvbLang != 'en')) {
    var lang = /lang=/i.test(window.location.search) ? window.location.search.match(/lang=(.*?)(?:&|$)/i) : localStorage.cvbLang, script;

    if (lang && lang[1]) {
      CodeVeinBuilder.setupData((/lang=/i.test(window.location.search) ? lang[1] : lang).toLowerCase());
    } 
    // load default if lang code cannot be obtained
    else {
      CodeVeinBuilder.setupData('en');
    }
  } 

  // otherwise load the default english data
  else {
    CodeVeinBuilder.setupData('en');
  }
  
}(window, document));