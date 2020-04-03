$(function() {
	const People = (function() {
		db = [];
		let list;
		let addButton;
		let data;

		function init() {
			cacheDOM();
			bindEvent();
		}
		function cacheDOM() {
			list = $("#peopleList");
			addButton = $("#addPeople");
			delButton = $(".deletePeople");
			data = $("#data");
		}
		function bindEvent() {
			addButton.on('click', function() {
				addPersonName();
			});
			list.delegate('span', 'click', function(event) {
     			delPersonName(event);
    		});
		}
		function addPersonName() {
			db.push(data.val());
			data.val('');
			render();
		}
		function delPersonName(event) {
			let deletedChild = $(event.target).closest('li');
			let i = list.find('li').index(deletedChild);
			db.splice(i, 1);
			render();
		}
		function render() {
			list.html('');
			for (let key in db) {
				$("#peopleList").append(`<li>${db[key]}<span style="margin-left: 10px; cursor: pointer;">X</span></li>`);
			}
			console.log(db);
		}
		return {
			init: init
		}
		
	})();

	People.init();
});