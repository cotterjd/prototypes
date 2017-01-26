String.prototype.contains = function (str) {
		return this.indexOf(str) !== -1	
}
String.prototype.formatCurrency = function () {
	if (isNaN(this)) return this
	return '$' + Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
