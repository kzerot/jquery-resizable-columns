// Generated by CoffeeScript 1.6.2
(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    resizableColumns: function(method_or_opts) {
      var makeResizable, store;

      if (method_or_opts == null) {
        method_or_opts = {};
      }
      store = void 0;
      makeResizable = function($table) {
        var i, resetHandles, setColumnWidth, setSizes, tableId;

        tableId = $table.data('resizable-columns-id');
        setColumnWidth = function($thisColumn, newWidth) {
          var columnId;

          columnId = tableId + "-" + $thisColumn.data('resizable-column-id');
          $thisColumn.css({
            width: newWidth
          });
          if (store) {
            return store.set(columnId, newWidth);
          }
        };
        resetHandles = function() {
          return $(".rc-draghandle").css({
            left: '',
            height: ''
          });
        };
        setSizes = function(difference, pos) {
          var $nextColumn, $thisColumn, couldntResize, currentWidth, newNextColumnWidth, newWidth;

          $thisColumn = $table.find("tr:first th").eq(pos);
          $nextColumn = $table.find("tr:first th").eq(pos + 1);
          currentWidth = $thisColumn.width();
          newWidth = currentWidth + difference;
          setColumnWidth($thisColumn, newWidth);
          couldntResize = newWidth - $thisColumn.width();
          if ($nextColumn.length > 0) {
            newNextColumnWidth = $nextColumn.width() - couldntResize;
            setColumnWidth($nextColumn, newNextColumnWidth);
          }
          return resetHandles();
        };
        i = 0;
        return $table.find("tr:first th").each(function() {
          var $dragHandle, columnId, index, initialPos;

          index = i;
          columnId = tableId + "-" + $(this).data('resizable-column-id');
          $(this).css({
            position: "relative",
            width: store ? store.get(columnId) : void 0
          });
          $dragHandle = $("<div class='rc-draghandle'></div>");
          $(this).append($dragHandle);
          initialPos = void 0;
          $dragHandle.draggable({
            axis: "x",
            start: function() {
              initialPos = $(this).offset().left;
              $(this).addClass('dragging');
              return $(this).height($table.height());
            },
            stop: function(e, ui) {
              var difference;

              $(this).removeClass('dragging');
              difference = $(this).offset().left - initialPos;
              return setSizes(difference, index);
            }
          });
          return i = i + 1;
        });
      };
      return $(this).each(function() {
        if (method_or_opts === 'destroy') {
          $(this).find(".rc-draghandle").remove();
          return $(this).find("th").css({
            position: '',
            width: ''
          });
        } else {
          store = method_or_opts.store;
          return makeResizable($(this));
        }
      });
    }
  });

}).call(this);