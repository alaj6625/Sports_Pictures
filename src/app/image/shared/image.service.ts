import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    // Get all of the images
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    // get one image
    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

// array storing image info.
const IMAGES =[
    {"id":1, "category": "football", "caption": "FLorida", "url":"assets/img/football_01.jpeg"},
    {"id":2, "category": "football", "caption": "Ole Miss", "url":"assets/img/football_02.jpg"},
    {"id":3, "category": "football", "caption": "L.S.U.", "url":"assets/img/football_03.jpg"},
    {"id":4, "category": "football", "caption": "Tennesee", "url":"assets/img/football_04.jpeg"},
    {"id":5, "category": "football", "caption": "L.S.U", "url":"assets/img/football_05.jpeg"},
    {"id":6, "category": "basketball", "caption": "Lakers", "url":"assets/img/basketball_01.jpeg"},
    {"id":7, "category": "basketball", "caption": "Pistons", "url":"assets/img/basketball_02.jpeg"},
    {"id":8, "category": "basketball", "caption": "Thunder", "url":"assets/img/basketball_03.jpeg"},
    {"id":9, "category": "basketball", "caption": "Warriors", "url":"assets/img/basketball_04.jpeg"},
    {"id":10, "category": "basketball", "caption": "Cavs", "url":"assets/img/basketball_05.jpeg"},
    {"id":11, "category": "basketball", "caption": "Hawks", "url":"assets/img/basketball_06.jpeg"},
    {"id":12, "category": "basketball", "caption": "loac", "url":"assets/img/basketball_07.jpeg"},
    {"id":13, "category": "basketball", "caption": "Rockets", "url":"assets/img/basketball_08.jpeg"},
    {"id":14, "category": "baseball", "caption": "LSU", "url":"assets/img/baseball_02.jpeg"},
    {"id":15, "category": "baseball", "caption": "Florida", "url":"assets/img/baseball_03.jpeg"},
    {"id":16, "category": "baseball", "caption": "Trojans", "url":"assets/img/baseball_04.jpeg"},
    {"id":17, "category": "baseball", "caption": "Alabama", "url":"assets/img/baseball_05.jpeg"},
    {"id":18, "category": "basketball", "caption": "Spurs", "url":"assets/img/basketball_09.jpeg"},
    {"id":19, "category": "football", "caption": "Alabama", "url":"assets/img/football_06.jpeg"},
    {"id":20, "category": "football", "caption": "Auburn", "url":"assets/img/football_07.jpeg"},
    {"id":21, "category": "football", "caption": "USC", "url":"assets/img/football_08.jpeg"},
    {"id":22, "category": "basketball", "caption": "Warriors", "url":"assets/img/basketball_10.jpeg"},
    {"id":23, "category": "football", "caption": "Ohio State", "url":"assets/img/football_10.jpeg"},
    {"id":24, "category": "football", "caption": "Penn State", "url":"assets/img/football_09.jpeg"},
    {"id":25, "category": "baseball", "caption": "Dodgers", "url":"assets/img/baseball_01.jpeg"},
]
