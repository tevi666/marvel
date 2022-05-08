import {
	render
} from "./render";

export class card extends render {
	constructor(data = {}, root) {
		super(root);
		this._data = data;
	}
	initTemplate() {
		if (!this._template) {
			return;
		}
		this._template.classList.add('card');
		let temp = `<div class="card__photo"><img class="lazy" data-src="${this._data.photo}" alt="${this._data.name}"/>
			<div class="card__info">
		`;
		for (let key in this._data) {
			if (key !== 'photo' && key !== 'movies') {
				temp += `<p class="card__${key}">${key}: <span>${this._data[key]}</span></p>`;
			}
		}
		temp += `</div></div>`;
		if (this._data.movies) {
			temp += `<div class="card__movies"><p>Movies:</p><ul class="card__movies-list">`;
			this._data.movies.forEach(movie => {
				temp += `<li data-film-name="${movie}" class="card__movie-item">${movie}</li>`;
			});
			temp += `</ul></div>`;
		}
		this._template.innerHTML = temp;

		const heightSize = window.innerHeight;
		const lazyShowImg = () => {
			const scrolls = window.scrollY * heightSize;

			const elements = document.getElementsByClassName('lazy');

			Array.from(elements).forEach(e => {
				if (scrolls > e.offsetTop) {
					e.setAttribute('src', e.getAttribute('data-src'));
					e.classList.remove('lazy');
				}
			});
		};
		lazyShowImg();
		setTimeout(() => {
			window.addEventListener('scroll', lazyShowImg);
		}, 3000);
	}
}