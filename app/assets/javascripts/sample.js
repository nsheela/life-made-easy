mary

army 



function areStringsAnagram(str1, str2) {
	if ((str1 == '') || (str2 == '') ) {
		return false
	}

	var str1_hash , str2_hash = {};
	var str1_len = str1.length;
	var str2_len = str2.length; 
	var i, j;

	if (str1_len !== str2_len) {
		return false;
	}

	for (i = 0; i < str1_len ; i ++) {
		if (str1_hash[str1[i]]) {
			str1_hash[str1[i]] += 1
		}

		str1_hash[str1[i]] = 1
	}

	for (j = 0; j < str2_len; j++) {
		if (str2_hash[str1[j]]) {
			str2_hash[str1[j]] += 1
		}

		str2_hash[str1[j]] = 1
	}

	for (var k= 0; k< str1_len; k++) {
		
	}

	
}