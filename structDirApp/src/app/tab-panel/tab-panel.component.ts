import { Component, OnInit, TemplateRef, ViewChild, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
})
export class TabPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // @ViewChild(TemplateRef)
  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab => tab.selected);

    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: TabComponent) {
    console.log('TabPanelComponent::selectTab ', tab);
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }

  test() {

  }
}
