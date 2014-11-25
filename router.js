var Router = function () {

	this._routes = [];

}

Router.prototype.addRoute = function (route, func) {

	var parts       = route.split('/');
	var ident       = route.split('/:')[0] || route;

	var routeObject = {
		ident: ident,
		func: func,
		parts: parts.length,
		parmsFrom: ident.split('/').length
	};

	this._routes.push(routeObject);

}

Router.prototype.find = function (path) {

	var ident  = path.split('/:')[0] || path;
	var parts  = path.split('/');
	var partsl = parts.length;

	for (var i = 0, l = this._routes.length; i < l; i++) {

		var route = this._routes[i]
		if (ident.indexOf(route.ident) === 0 && partsl === route.parts) {
			route.func.apply(this, parts.splice(route.parmsFrom));
			return;
		}

	}

}
