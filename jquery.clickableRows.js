/*
  jQuery Clickable Rows Plugin
  Copyright (C) 2011 Paradigm New Media Group
  http://pnmg.com | http://github.com/pnmg/jquery-clickablerows
  
  Make rows in a table clickable if there is a link in the first or last cell.
  
  --

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
(function($){
  $.fn.clickableRows = function(){
    var $this = $(this);
    $this.find('tbody tr').each(function(){
      var cells = $(this).find('td');
      if(cells.length > 0){
        cellLink = $(cells[0]).find('a');
        if(cellLink.length == 0){
          cellLink = $(cells[cells.length - 1]).find('a');
        }
        if(cellLink.length > 0){
          var url = $(cellLink[0]).attr('href');
          cells.css('cursor', 'pointer').click(function(e){ 
            // only make cells without another link clickable
            if($(this).find('a').length > 0){ return; }
            window.location.href = url; 
          });
        }
      }
    });
  }
})(jQuery);