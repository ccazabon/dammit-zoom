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

### Compatibility and installation

#### Firefox and other browsers supporting Manifest v2

This should be installable from [this extension's Mozilla add-ons page](https://addons.mozilla.org/en-US/firefox/addon/dammit-zoom-for-firefox/) .

#### Chrome, Vivaldi, Brave, Opera and other browsers supporting Manifest v3

This works on Blink-based browsers (Chomium/Chrome, Vivaldi, Brave, etc), as
they support the declarativeNetRequest API from manifest V3.

This extension is not currently available through the Chrome Web Store, so it's
not a one-click install-and-run, unfortunately.

You can install this by turning developer-mode on in Chrome/etc, downloading
this repository, and adding this "unpacked extension" to your browser.

Apparently using it with Safari requires you to run it through an 
[automatic web extension converter with Xcode](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari) ,
though I haven't tried it.

It may also work on other non-Blink WebKit browsers, but I haven't tried any.

For Firefox, use the Manifest v2 version above.

See Manifest v3 rant below.

### Why isn't this in the Chrome web store?

It's not in the Chrome store because in order to publish an extension through
the store -- even if you're not charging money for it -- you have to pay an
up-front fee to Google, in addition to giving them every personal bit of
information about yourself, your life, your friends, your email, and the
rights to your first-born child (there's that advertising business again).

### Support / bugs

If you have problems with this extension, please let me know.  Open an issue
on the [Github project page](https://github.com/ccazabon/dammit-zoom) .

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


