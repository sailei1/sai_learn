import Assign from 'object-assign';

export function calcIDCardCode(isShenFenZheng,idCardBody){
	if (idCardBody.length != 17) {
		return '';
	}
	// 加权因子
	var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	// 校验码对应值
	var code = isShenFenZheng ? ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] : ['1', '0', '5', '9', '8', '7', '6', '5', '4', '3', '2'];
	var checksum = 0;
	for (var i = 0; i < idCardBody.length; i++) {
		checksum += idCardBody.substr(i, 1) * factor[i];
	}
	return code[checksum % 11];
}
 /**
 * 18位身份证校验码有效性检查
 *  @param: isShenFenZheng true/ false (true 身份证); idCard: 身份证码 || 兑换券码
 *  @param: idCard Number
 */
export function check18IDCard(isShenFenZheng,idCard) {

	if(isShenFenZheng && idCard.length != 18){
		return false;
	}else if(!isShenFenZheng && idCard.length != 14){
		return false;
	}
	var idCardBody = idCard.substr(0, 17);
	var idCardCode = idCard.substr(17, 1).toUpperCase();
	if (calcIDCardCode(isShenFenZheng,idCardBody) != idCardCode) {
		return false;
	}
	return true;
}
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
	return list.filter(f)[0]
}
(function () {
	if(typeof Array.prototype.find !== 'function'){
		Array.prototype.find = function (callback) {
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (callback.call(this, item)) {
					return item
				}
			}
		}
	}
	if(typeof Array.prototype.findIndex !== 'function'){
		Array.prototype.findIndex = function (callback) {
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (callback.call(this, item)) {
					return i;
				}
			}
			return -1;
		}
	}
})();
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
	// just return if obj is immutable value
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	// if obj is hit, it is in circular structure
	const hit = find(cache, c => c.original === obj)
	if (hit) {
		return hit.copy
	}

	const copy = Array.isArray(obj) ? [] : {}
	// put the copy into cache at first
	// because we want to refer it in recursive deepCopy
	cache.push({
		original: obj,
		copy
	})

	Object.keys(obj).forEach(key => {
		copy[key] = deepCopy(obj[key], cache)
	})

	return copy
}

export function isObject (obj) {
	return obj !== null && typeof obj === 'object'
}
export function merge (...sources){
	return Assign({}, ...sources);
}
export function isPromise (val) {
	return val && typeof val.then === 'function'
}

export function assert (condition, msg) {
	if (!condition) throw new Error(`[vuex] ${msg}`)
}

export function isEmptyObject(obj) {
	let key;
	for (key in obj)
		return false;
	return true;
}