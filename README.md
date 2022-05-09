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

This works on Blink-based browsers (Chrome, Vivaldi, Brave, etc), as they
support the declarativeNetRequest API from manifest V3.  Safari is supposed to
support manifest V3 as of version 15.4, so it should work, but I haven't
tested it.  It may also work on other webkit browsers, if they've been updated
recently enough.

It currently will not work on Firefox, which does not support manifest V3.
See below for rant.

This extension is not currently available through the ChromeWeb Store.  That's
because in order to publish an extension through the store -- even if you're
not charging money for it -- you have to pay an up-front fee to Google, in
addition to giving them every personal bit of information about yourself, your
life, your friends, your email, and the rights to your first-born child
(there's that advertising business again).

You can install this by turning developer-mode on in Chrome/etc, downloading
this repository, and adding this "unpacked extension" to your browser.

### Support / bugs

If you have problems with this extension, please let me know.  Open an issue
on the [Github project page]() .

### Manifest V3

Note: I disapprove of the changes Google introduced in manifest V3.  The
declarativeNetRequest change seems explicitly designed to break ad- and
tracking-blocker extensions like uBlock Origin, AdBlock Plus, Privacy Badger,
etc.  The fact that those types of extensions impact Google's bottom line --
because it is primarily an advertising company -- I'm sure had no impact
on their decision.

See [Mozilla's take on this](https://blog.mozilla.org/addons/2019/09/03/mozillas-manifest-v3-faq/)
for more information.

I haven't made a manifest V2 version of this extension (it would be relatively
easy) because I don't use Zoom in Firefox, though it's my main personal
browser.  I only use Zoom for work.  I disapprove of the other browsers'
acceptance of manifest V3, as it helps Google secure even more control over
the 'net than it already has.


