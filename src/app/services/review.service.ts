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
      "id": 5,
      "product": "Ergonomic Keyboard",
      "rating": 5,
      "comment": "Dieses Keyboard hat meine Erwartungen übertroffen. Ergonomisch und das Schreibgefühl ist hervorragend.",
      "date": "2024-03-19"
    },
    {
      "id": 1,
      "product": "Wireless Headphones",
      "rating": 5,
      "comment": "Hervorragender Klang und sehr bequem zu tragen. Akkulaufzeit ist auch super.",
      "date": "2024-03-20"
    },
    {
      "id": 6,
      "product": "Smartwatch Fitness Tracker",
      "rating": 4,
      "comment": "Gutes Gerät mit vielen Funktionen, allerdings ist die Batterielaufzeit kürzer als erwartet.",
      "date": "2024-03-16"
    },
    {
      "id": 2,
      "product": "Ergonomic Keyboard",
      "rating": 4,
      "comment": "Tolle Tastatur, das Tippen fühlt sich gut an. Ein Stern Abzug wegen der Beleuchtung.",
      "date": "2024-03-18"
    },
    {
      "id": 4,
      "product": "Wireless Headphones",
      "rating": 4,
      "comment": "Sehr gute Klangqualität, aber die Kopfhörer sitzen bei längerem Gebrauch nicht so bequem.",
      "date": "2024-03-22"
    },
    {
      "id": 3,
      "product": "Smartwatch Fitness Tracker",
      "rating": 5,
      "comment": "Zählt Schritte genau und hat viele nützliche Funktionen. Sehr zufrieden!",
      "date": "2024-03-15"
    },
    {
      "id": 7,
      "product": "Wireless Headphones",
      "rating": 3,
      "comment": "Die Verbindung bricht gelegentlich ab, was ziemlich frustrierend sein kann. Soundqualität ist aber top.",
      "date": "2024-03-23"
    },
    {
      "id": 8,
      "product": "Ergonomic Keyboard",
      "rating": 2,
      "comment": "Für meinen Geschmack zu sperrig und die Tasten sind zu hart. Nicht mein Fall.",
      "date": "2024-03-21"
    },
    {
      "id": 9,
      "product": "Smartwatch Fitness Tracker",
      "rating": 5,
      "comment": "Perfekt für mein tägliches Training! Verfolgt meine Aktivitäten genau und die App ist sehr benutzerfreundlich.",
      "date": "2024-03-17"
    }
  ]  
}
