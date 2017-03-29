$("#nlt12017").click(function() {
    // // hope the server sets Content-Disposition: attachment!
	ga('send', 'event', 'Newsletters', 'Viewed', 'Term 1 2017', {
	    hitCallback: function() {
    		window.location = 'pdf/Newsletter-Term1-2017.pdf';
	    }
	  });
});