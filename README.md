# Quick-local-ip

quick-local-ip is a utility module which provides straight-forward access to local network addresses. it provides 2 functions to get local ip addresses.

- If System is connected to multiple internet connections like wifi and ethernet and usb internet, following methods will return an array of ip addresses.
- If System is connected with one internet connection, methods will return ip address in sintring format.
- If system is not connected with internet **127.0.0.1** will be returned by all methods.

## Quick Examples

var myip = require('quick-local-ip');

### getting ip4 network address of local system.

    myip.getLocalIP4();
     Returns an array of String or a String, depends on internet connections.
     It'll never be undefined.


### getting ip6 network address of local system

    myip.getLocalIP6();
     Returns an array of String or a String, depends on internet connections.
     It'll never be undefined.
