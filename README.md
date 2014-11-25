#Tiny JS Router

A tiny router written in Javascripts for fun and not profit.

## Example

```
var r = new Router();
r.addRoute('blog/view/:id', function (id) {
  console.log('Viewing blog with id:', id);
});

r.addRoute('blog/edit/:id', function (id) {
  console.log('Editing blog with id:', id);
});

r.addRoute('user/:id/:action', function (id, action) {
  console.log('Doing', action, 'with user that has id:', id);
});

r.addRoute('', function () {
	console.log('I am your favorite route');
});

r.find('blog/view/6'); //Viewing blog with id: 6
r.find('blog/edit/6'); //Editing blog with id: 6
r.find('user/delete/7'); // Doing delete with user that has id: 7
r.find(''); //I am your favorite route

r.find('blog/view/6/7'); //Won't do anything because param count (2) won't match with what is expected (1)
r.find('blog/view'); //Won't do anything because param count (0) won't match what is expected (1)
```

Routes are favored in order. For example in the situation below;
```
r.addRoute('blah', cb);
r.addRoute('blah', cb2);
```
cb2 will never be called. Sorry CB2!
