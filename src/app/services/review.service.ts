import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getStars(rating: number): Array<any> {
    return new Array(rating);
  }

  public lastReviews = [
    {
      "id": 1,
      "product": "Wireless Headphones",
      "rating": 5,
      "comment": "Hervorragender Klang und sehr bequem zu tragen. Akkulaufzeit ist auch super.",
      "date": "2024-03-20"
    },
    {
      "id": 2,
      "product": "Ergonomic Keyboard",
      "rating": 4,
      "comment": "Tolle Tastatur, das Tippen fühlt sich gut an. Ein Stern Abzug wegen der Beleuchtung.",
      "date": "2024-03-18"
    },
    {
      "id": 3,
      "product": "Smartwatch Fitness Tracker",
      "rating": 5,
      "comment": "Zählt Schritte genau und hat viele nützliche Funktionen. Sehr zufrieden!",
      "date": "2024-03-15"
    }
  ];
}
