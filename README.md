## Dammit, Zoom!

This is a very simple web browser extension to eliminate Zoom's annoying 
insistence on you opening every meeting link in their desktop applications.
Why install a bloated, buggy, proprietary application when the web client
does everything you want?

It's particularly annoying on Linux, because
* it prompts you every time to open the app with xdg-open
* their app is crap; it hard-locks a lot of systems I've tried it on

With this extension, every Zoom meeting link will be redirected to the web
client join page for the meeting.

This works on Blink-based browsers (Chrome, Vivaldi, Brave, etc).  It 
should also work on Safari, and possibly on Firefox and others.

Note that this extension is not currently available through the Chrome
Web Store.  That's because in order to publish an extension through the
store -- even if you're not charging money for it -- you have to pay an
up-front fee to Google, in addition to giving them every personal bit
of information about yourself, your life, your friends, your email, and
the rights to your first-born child.

You can install this by turning developer-mode on in Chrome/etc, downloading
this repository, and adding this "unpacked extension" to your browser.

### Support / bugs

If you have problems with this extension, please let me know.  Open an issue
on the [Github project page]() .
