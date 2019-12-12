The DocSite
=======

## Introduction

Provides a framework for a minimal non-server-based documentation website that can be stored offline.

## How to Edit This Site

* Do not fork this repository, except when issuing new versions:
  * Master branch contains latest documentation.
  * Forked branches contain previous documentation versions.
* Once you have a local copy, either:
  * Open the solution file _~/DocSite/DocSite.sln_ with [Visual Studio](https://visualstudio.microsoft.com/vs/community/).
  * Open the site folder _~/DocSite/Website_ with [Microsoft Expression Web](https://www.microsoft.com/en-gb/download/details.aspx?id=36179) or the HTML editor of your choice.
* Write in plain English, avoiding overly-technical language.
* Use relative links instead of absolute links.
* Use [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) style classes to format text.
* Do not edit **any** of the HTML code within the `<head>` tags.
* Do not use `<div>` or `<span>` tags, unless absolutely necessary.
* Do not attach any non-image files to pages (e.g.. PDF or Word documents). Copy text into the HTML web pages and format it appropriately.

## Headers and Footers

To change the headers and footers of the pages, you'll need to edit the _~/DocSite/Website/resources/scripts/docsite.js_ file. This JavaScript file uses JQuery to inject the appropriate HTML for a [Bootstrap Navbar](https://getbootstrap.com/docs/4.4/components/navbar/) that collapses into a dropdown menu when viewed on small-screen devices.

You can change the links in the Navbar by editing the HTML added using the following command:

* `$('ul.navbar-nav').append([...]);`

## Success / Warning / Danger Cards

On the Example Page provided, you will see three cards displayed above the main text block. These are also added using a JQuery command in the _~/DocSite/Website/resources/scripts/docsite.js_ file. This command looks for a class attribute trigger value in the `<body>` tag, like this: `<body class="success warning danger">`, and adds the requested cards.

You can change what appears in the cards by editing the HTML added using the following commands:

* `$('body.success div.container h1:first').after([...]);`
* `$('body.warning div.container h1:first').after([...]);`
* `$('body.danger div.container h1:first').after([...]);`

## Password / Important Notice Card

On the Example Page provided, you will also see one card displayed below the main text block, currently used to add a warning message about not including passwords in documentation. Again, this is added using a JQuery command in the _~/DocSite/Website/resources/scripts/docsite.js_ file. This command adds the card to every page in the site, **unless** there is a class attribute trigger value in the `<body>` tag, like this: `<body class="intro">`, indicating that this is an introductiory page.

You can change what appears in the card by editing the HTML added using the following command:

* `$('body:not(.intro) div.container').append([...]);`

## Contact the Developer

The DocSite was created by David Bailey from [Bailey Web & Digital](https://baileyweb.online/), and is released under an [MIT Licence](https://opensource.org/licenses/mit-license.php). The source code is available on GitHub.
