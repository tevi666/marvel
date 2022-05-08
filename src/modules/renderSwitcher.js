export const renderSwitcher = (root, data) => {
	if (data) {
		const moviesList = new Set();
		data.forEach(item => {
			if (item.movies) {
				item.movies.forEach(movie => {
					moviesList.add(movie);
				});
			}
		});
		const nav = document.createElement('nav');
		nav.classList.add('switcher');
		let temp = `<ul class="filter__list">
					<li data-film="all" class="filter__link">Filter
					<ul class="switcher__list">
					<li data-film="all">All films</li>`;
		for (let movie of moviesList) {
			temp += `<li class="switcher__link" data-film="${movie}">${movie}</li>`;
		}
		temp += `</li></ul></ul>`;
		nav.innerHTML = temp;
		root.append(nav);
		const div = document.createElement('div');
		div.classList.add('selected__movie');
		root.append(div);
	}
};
