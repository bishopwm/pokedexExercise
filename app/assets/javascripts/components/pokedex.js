var PokedexComponent = function(container, pokemons, itemComponent) {
	this.container = container;
	this.itemComponent = itemComponent;
	this.pokemons = pokemons;
}

PokedexComponent.prototype.template = function (pokemons) {
	var html = ' ';
	console.log(this.pokemons);
	this.pokemons.forEach(function(pokemon) {
		html += '<ul>' +
				'<li>' + pokemon.name + '</li>' +
				'</ul>';
	});
	return html
};

PokedexComponent.prototype.render = function() {
	this.container.html(this.template(this.pokemons));
};

module.exports = PokedexComponent;