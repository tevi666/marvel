import {
	card
} from "./card";
import {
	render
} from "./render";

export class cardsList extends render {
	constructor(root, data = []) {
		super(root);
		this.createCardsObjectsList(data);
	}
	createCardsObjectsList(data) {
		this._cards = data.map(item => {
			return new card(item);
		});
	}
	get cards() {
		return this._cards;
	}
	initTemplate() {
		if (!this._template) {
			return;
		}
		this._template.classList.add('cards-list');
		this.cards.forEach(item => item.render(this._template));
	}
}