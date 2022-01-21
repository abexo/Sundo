
let dropdown = $("#category")
let subs = $("#subcategory")

dropdown.empty()
subs.empty()

dropdown.append('<option selected="true" disabled>Category</option>')
subs.append('<option selected="true" disabled>Select a category</option>')
dropdown.prop("selectedIndex", 0)
subs.prop("selectedIndex", 0)

const url = "https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b"

$.getJSON(url, function (data) {
	$.each(data, function (key, item) {
		dropdown.append(
			$("<option>", {
				value: item.categoryId,
				text: item.name,
			})
		)
	})

	dropdown.on("change", function () {
		subs.empty()
		subs.append('<option selected="true" disabled>Select Subcategory</option>')
		if (
			data[this.value].categoryId === 0 ||
			data[this.value].categoryId === 4
		) {
			subs.empty()
			subs.append('<option selected="true" disabled>No Subcategory</option>')
		} else {
			$.each(data[this.value].subCategories, function (key, item) {
				subs.append(
					$("<option>", {
						value: item.subCategoryId,
						text: item.name,
					})
				)
			})
		}
	})

})


