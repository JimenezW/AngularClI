import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public ngOnInit()
  {
    $(document).ready(function(){
      $('.menu li:has(ul)').click(function(e){
          e.preventDefault();
          if($(this).hasClass('activado')){
              $(this).removeClass('activado');
              $(this).children('ul').slideUp();
          }else{
              $('.menu li ul').slideUp();
              $('.menu li').removeClass('activado');
              $(this).addClass('activado');
              $(this).children('ul').slideDown();
          }
      });
  });
  }

}
