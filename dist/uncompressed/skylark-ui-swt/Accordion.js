define([
  "skylark-langx/langx",
  "skylark-utils-dom/browser",
  "skylark-utils-dom/eventer",
  "skylark-utils-dom/noder",
  "skylark-utils-dom/geom",
  "skylark-utils-dom/query",
  "skylark-bootstrap3/collapse",
  "./ui",
  "./Widget",
  "./Panel"
],function(langx,browser,eventer,noder,geom,$,collapse,ui,Widget, Panel){

  var Accordion = Widget.inherit({
    klassName : "Accordion",

    pluginName : "lark.accordion",

    options : {
      panel: {
        selector : "> .panel",
        template : null,
      }
    },
    _parse : function() {
      //
    },

    _init : function() {
      var panels = [];
      this._velm.$(this.options.panel.selector).forEach(function(panelEl){
        var panel = new Accordion.Panel(panelEl,{

        });
        panels.push(panel);
      });
      this._panels = panels;
    },

    _sync : function() {
      // handle internal events
    },

    _refresh : function(updates) {
    },

    panels : {
      get : function() {

      }
    },


    addPanel : function() {
      var $newPanel = $template.clone();
      $newPanel.find(".collapse").removeClass("in");
      $newPanel.find(".accordion-toggle").attr("href",  "#" + (++hash))
               .text("Dynamic panel #" + hash);
      $newPanel.find(".panel-collapse").attr("id", hash).addClass("collapse").removeClass("in");
      $("#accordion").append($newPanel.fadeIn());

    },

    removePanel : function() {

    },

    expandPanel : function() {
      // expand a panel

    },

    expandAllPanel : function() {
      // expand a panel

    },

    collapsePanel : function() {

    },

    collapseAllPanel : function() {

    }


  });


  Accordion.Panel = Panel.inherit({
    klassName : "AccordionPanel",

    _init : function() {
      //this._velm.collapse();
      this.overrided();
    },

    expand : function() {
      // expand this panel
      $(this._elm).collapse("show");
    },

    collapse : function() {
      // collapse this panel
      this._velm.collapse("hide");
    },

    toogle : function() {
      // toogle this panel
     this._velm.collapse("toogle");
    },

    remove : function() {
      this.overided();
    }
  });

  return Accordion;

});