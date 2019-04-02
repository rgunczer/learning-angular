import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { CardItemDirective } from '../card-item.directive';
import { ListItemDirective } from '../list-item.directive';

@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html'
})
export class CardOrListViewComponent implements OnInit {

  @Input() mode: 'card' | 'list' = 'card';
  @Input() items: { header: string, content: string }[] = [];

  @ContentChild(CardItemDirective, { read: TemplateRef }) cardItemTemplate;
  @ContentChild(ListItemDirective, { read: TemplateRef }) listItemTemplate;

  constructor() { }

  ngOnInit() {
  }

}
