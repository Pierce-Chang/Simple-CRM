export class Review {
    id: number;
    rating: number;
    comment: string;
    date: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : 0;
        this.rating = obj ? obj.rating : 0;
        this.comment = obj ? obj.comment : '';
        this.date = obj ? obj.date : '';
    }

    public toJSON() {
        return {
            id: this.id,
            rating: this.rating,
            comment: this.comment,
            date: this.date,
        }
    }
}