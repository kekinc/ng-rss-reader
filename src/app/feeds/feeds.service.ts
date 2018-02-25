import { IFeed } from './feed';
import { Injectable } from '@angular/core';

@Injectable()

export class FeedsService{
    feeds: IFeed[];

    getFeeds(): IFeed []{
        this.feeds = [
            {
                title: 'TechCrunch',
                link: 'https://techcrunch.com/',
                description: 'Startup and Technology News',
                image: 'https://secure.gravatar.com/blavatar/d9ea925a71f82f06a1e6224298f7fe80?s=96&amp;d=https%3A%2F%2Fs2.wp.com%2Fi%2Fbuttonw-com.png',
                category:'Technology'
            },
            {
                title:'CNN - Travel',
                link:'https://www.cnn.com/app-travel-section/index.html',
                description:'CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.',
                image:'http://i2.cdn.turner.com/cnn/2015/images/09/24/cnn.digital.png',
                category:'Life Style'
            },
            {
                title:'CNN - Football',
                link:'https://www.cnn.com/sport/football/index.html',
                description:'CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.',
                image:'http://i2.cdn.turner.com/cnn/2015/images/09/24/cnn.digital.png',
                category:'Sports'
            }
        ];

        return this.feeds;
    }
}