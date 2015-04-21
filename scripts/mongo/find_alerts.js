
db.alerts.find({}).forEach(function(item) {
	print(item.email + "\t" + item.product_code)
})