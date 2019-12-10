// Insert header and footer on pages:
$(document).ready(function () {
	$('body').wrapInner('<div class="container" />');
	
	// Top navigation bar:
	$('body').prepend('<div id="header"><nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="index.html">The DocSite</a></nav></div>');
	$('nav.navbar').append('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class= "navbar-toggler-icon"></span></button>');
	$('nav.navbar').append('<div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"></ul></div>');
	
	// Top navigation bar links:
	$('ul.navbar-nav').append('<li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>');
	$('ul.navbar-nav').append('<li class="nav-item active"><a class="nav-link" href="menu1.html">Menu Page One</a></li>');
    $('ul.navbar-nav').append('<li class="nav-item active"><a class="nav-link" href="menu2.html">Menu Page Two</a></li>');
    $('ul.navbar-nav').append('<li class="nav-item active"><a class="nav-link" href="menu3.html">Menu Page Three</a></li>');
	
	// Alerts:
    $('body.success div.container h1:first').after('<div class="card border-success"><div class="card-body text-success"><h4 class="card-title">Sucess</h4><p class="card-text">Change this text by editing the docsite.js file.</p></div></div>');
    $('body.warning div.container h1:first').after('<div class="card border-warning"><div class="card-body text-warning"><h4 class="card-title">Warning</h4><p class="card-text">Change this text by editing the docsite.js file.</p></div></div>');
    $('body.danger div.container h1:first').after('<div class="card border-danger"><div class="card-body text-danger"><h4 class="card-title">Danger</h4><p class="card-text">Change this text by editing the docsite.js file.</p></div></div>');
	$('body:not(.intro) div.container').append('<div class="card border-danger"><div class="card-body text-danger"><h4 class="card-title">Important Notice</h4><p class="card-text">Do not include <strong>any</strong> usernames or passwords in this site! Store them in an encrypted password manager instead.</p></div></div>');
	
	// Main content row and column:
	$('div.container').wrapInner('<div id="content" class="row" />');
	$('div#content').wrapInner('<div class="col" />');
	
	// Footer bar:
	$('body').append('<div id="footer"><nav class="navbar fixed-bottom navbar-light bg-light"><p class="text-muted">&copy; <a href="https://baileyweb.online/">Bailey Web &amp; Digital</a>. Frameworks: <a href="https://api.jquery.com/">JQuery v3.4.1</a>, <a href="https://popper.js.org/">Popper.js v1.16.0</a>, <a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">Bootstrap v4.4.0</a>.</p></nav></div>');
});

// Expression to find external hyperlinks:
$.expr[':'].external = function (obj) {
    return !obj.href.match(/^mailto\:/)
        && (obj.hostname != location.hostname)
        && (obj.hostname != 'localhost')
        && !obj.href.match(/^tel\:/)
        && !obj.href.match(/^javascript\:/)
        && !obj.href.match(/^$/)
};

// Run once page and linked resources have finished loading:
$(document).ready(function () {
    // Insert page H1 title into document title:
    if($('h1:first').text() != 'The SPHERE MegaDoc') {
    	$(document).prop('title', 'SPHERE MegaDoc: ' + $('h1:first').text() );
    }
    // Remove empty paragraphs from pages:
    $('p').each(function () {
        var $this = $(this);
        if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
            $this.remove();
    });
    // Insert carriage return icon after line breaks using a styled span:
    $('br').each(function () {
        $('<span class="break" aria-hidden="true"></span>').insertBefore(this);
    });
    // Insert target="_blank" attribute to external hyperlinks:
    $('a:external').attr('target', '_blank').attr('title', 'Opens in a new window or tab');
    // Insert scrollable notice before each responsive table:
    $('div.table-responsive').each(function () {
        $('<p class="scrollable-table"><span class="badge badge-secondary">Scrollable table « »</span></p>').insertBefore(this);
    });
});