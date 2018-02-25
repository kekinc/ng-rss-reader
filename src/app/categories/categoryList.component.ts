import { Component,Output,EventEmitter } from '@angular/core';
import { ICategory } from './category';

@Component({
    selector: 'categories',
    templateUrl: 'app/categories/categoryList.component.html'
})

export class CategoryList {

    categories: ICategory[];
    
    selectedCategory:string;

    @Output()
    buttonClicked:EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.categories = [
            { name: 'Technology', feedCount: 2 },
            { name: 'Science', feedCount: 3 },
            { name: 'Sports', feedCount: 1 },
            { name: 'Life Style', feedCount: 5 },
            { name: 'Market', feedCount: 9 },
            { name: 'Politics', feedCount: 15 }
        ]
    }

    selectCategory(selectedCategory:string):void{
        this.selectedCategory = selectedCategory;
        this.buttonClicked.emit(this.selectedCategory);
    }

}