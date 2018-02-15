String.prototype.contains = function (str) {
	return this.indexOf(str) !== -1	
}
String.prototype.containsOne = function(arr) {
   for(let i = 0; i<arr.length; i++) {
     if(this.indexOf(arr[i]) !== -1) {
       return true
     }
   }
   return false
};
String.prototype.containsAll = function(arr) {
   for(let i = 0; i<arr.length; i++) {
     if(this.indexOf(arr[i]) == -1) {
       return false
     }
   }
   return true
};
String.prototype.formatCurrency = function () {
	if (isNaN(this)) return this
	return '$' + Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
//pass in property to filter out duplicate values of that property. don't pass anything in for primitive arrays
Array.prototype.unique = function (property) {
	if (property) {
		var i = 0 
		, uniqueObject = {}
		, uniqueArray = []
		;

		for (let i = 0, n = this.length; i < n; i++) {
			const item = this[i]
			uniqueObject[item[property]] = item
		}
		for (let x in uniqueObject) {
			uniqueArray[i++] = uniqueObject[x]
		}
		return uniqueArray
	} else {
		return this.filter(function (item, i) {
			return this.indexOf(item) == i
		}.bind(this))
	}
}
Array.prototype.sortBy = function (prop, direction) {
	if (direction.toUpperCase() == "DESC") {
		return this.sort(function (a, b) {
			if (a[prop] > b[prop]) return -1
			if (a[prop] < b[prop]) return 1
			return 0
		})
	} else {
		return this.sort(function (a, b) {
			if (a[prop] < b[prop]) return -1
			if (a[prop] > b[prop]) return 1
			return 0
		})
	}
}
Date.prototype.withoutTime = function () {
    var d = new Date(this)
    d.setHours(0, 0, 0, 0)
    return d
}
