SWFObject Compatibility Layer
---
If you happen to have lots of legacy code with old swfobject 1.5 invocations, this library allows you to keep your outdated 1.5 invocations:

    var so = new SWFObject(arguments...);
    so.addParam('param', 'value');
    so.addParam('lame', true);
    so.write('divID');
while generating a swfobject 2.2 invocation for you, with the arguments you've passed.

    swfobject.embedSWF(arguments, params...);

Dependencies
---
* Well, swfobject 2.2
* MooTools 1.3. I'll lower it to 1.2 soon, and maybe convert it to POJ someday (don't hold your breath).

Official swfobject documentation
---
**swfobject 1.5**
http://blog.deconcept.com/swfobject/

**swfobject 2.2**
http://code.google.com/p/swfobject/wiki/documentation