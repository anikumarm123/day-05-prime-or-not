let n = 15;
let p = 1;
	for (i = 2; i < n ; i++) {
		if (n % i == 0) {
			p = 0;
		}
    }
	if (p==1) {
		console.log(n + " is a prime number");
	}
	else {
		console.log(n + " is not a prime number");
	}
    