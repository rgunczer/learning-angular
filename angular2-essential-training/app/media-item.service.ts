import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaItemService {

    constructor(private http: HttpClient) {

    }

    get(medium) {
        let getOptions = {
            params: {
                //medium: medium;
                medium // es6 short syntax
            }
        };
        //return this.mediaItems;
        return this.http.get<MediaItemsResponse> ('mediaitems', getOptions)
            .pipe(
                map((response: MediaItemsResponse) => {
                    return response.mediaItems;
                })
            );
    }

    add(mediaItem) {
        //this.mediaItems.push(mediaItem);
        return this.http.post('mediaitems', mediaItem);
    }

    delete(mediaItem) {
        // let index = this.mediaItems.indexOf(mediaItem)
        // if (index !== -1) {
        //     this.mediaItems.splice(index, 1);
        // }
        return this.http.delete(`mediaitems/${mediaItem.id}`);
    }
/*
    mediaItems = [
        {
          id: 1,
          name: "Firebug",
          medium: "Series",
          category: "Science Fiction",
          year: 2010,
          watchedOn: 1294166565384,
          isFavorite: false
        }, {
          id: 2,
          name: "The Small Tall",
          medium: "Movies",
          category: "Comedy",
          year: 2015,
          watchedOn: null,
          isFavorite: true
        }, {
          id: 3,
          name: "The Redemption",
          medium: "Movies",
          category: "Action",
          year: 2016,
          watchedOn: null,
          isFavorite: false
        }, {
          id: 4,
          name: "Hoopers",
          medium: "Series",
          category: "Drama",
          year: null,
          watchedOn: null,
          isFavorite: true
        }, {
          id: 5,
          name: "Happy Joe: Cheery Road",
          medium: "Movies",
          category: "Action",
          year: 2015,
          watchedOn: 1457166565384,
          isFavorite: false
        }
    ];
*/
}

interface MediaItem {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: string;
    watchedOn: number;
    isFavorite: boolean;
}

interface MediaItemsResponse {
    mediaItems: MediaItem[];
}