// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var allfriends = [
 	{
	  "name":"peach",
	  "photo":"http://i1.kym-cdn.com/entries/icons/original/000/021/681/peach.png",
	  "scores":[
	     5,
	     1,
	   ]
	},
	{
	  "name":"apple",
	  "photo":"https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg",
	  "scores":[
	     4,
	     2,
	   ]
	},
	{
	  "name":"pear",
	  "photo":"https://www.organicfacts.net/wp-content/uploads/pear.jpg",
	  "scores":[
	     2,
	     3,
	   ]
	},

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = allfriends;
