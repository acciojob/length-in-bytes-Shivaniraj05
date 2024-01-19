const byteSize = (str) => {
  // write your code here
	if (str === '') {
        return 0;
    }
	var blob = new Blob([str]);

    // Get the size of the Blob in bytes
    var sizeInBytes = blob.size;

    return sizeInBytes;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
