import { Component,OnInit } from '@angular/core';
import { IFeed } from './feed';
import { FeedsService } from './feeds.service'

@Component({
    selector: 'feeds',
    templateUrl: 'app/feeds/feeds.component.html'
})

//https://techcrunch.com/feed/

export class FeedsComponent implements OnInit {
    feeds: IFeed[];
    feedCategory:string = 'Technology';
    selectedFeeds:IFeed[];

    constructor(private __feedsService:FeedsService) {}

    ngOnInit(){
        this.feeds = this.__feedsService.getFeeds();
        this.getFeedsByCategory();
    }

    onButtonClick(selectedCategory:string):void{
        this.feedCategory = selectedCategory;
        this.getFeedsByCategory();
    }

    getFeedsByCategory(){

        this.selectedFeeds = [];

        for(let i=0;i<this.feeds.length;i++){
            if(this.feeds[i].category === this.feedCategory){
                this.selectedFeeds.push(this.feeds[i]);
            }
        }

        console.log("Selected category is: "+this.feedCategory);
        console.log(JSON.stringify(this.selectedFeeds));
    }
}