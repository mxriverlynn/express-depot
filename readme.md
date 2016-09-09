# Express-Depot

Easily mount Express sub-applications and other middleware, from a directory
listing. 

Express-Depot allows you to create a plugin-like system for your Express
applications. It will take a listing of folders (from a "parent" or "dispatch")
folder, require each of the folders and mount the resulting sub-app or
middleware as an enpoint in your Express application.

This is useful for Express apps that need to load third party or external
plugins and services.

## Getting Started

Install it:

`npm install --save express-depot`

Then in your Express app, run the `dispatch` method to load a complete list
of directories from your "dispatch" folder, providing a base mount point for
all of the sub-apps and other middleware to be mounted.

```js
var express = require("express");
var path = require("path");
var depot = require("express-depot");

// ...

var app = express();

// ...

var dispatchFolder = path.join(__dirName, "dispatch");
depot.dispatch(app, "/plugins", dispatchFolder);
```

## Creating Sub-Apps and Middleware To Dispatch

In your file system, create a folder called "dispatch" (as noted in the
`dispatchFolder` variable, above). In this folder, create a single sub-directory
for each sub-app or middleware that you wish to load.

Each folder should have an index.js file that exports valid Express middleware,
(including a complete Express application object).

For example:

```
| dispatch/
| - cool-thing/
| - - index.js
| - whatever/
| - - index.js
| - - routes.js
| - - views/
| - - - index.jade
```

When you run the dispatcher, both `cool-thing` and `whatever` will be required
and mounted into your parent Express app, using their folder name as the
end-point.

If you dispatch to a `/plugins` folder, for example:

```js
depot.dispatch(app, "/plugins", dispatchFolder);
```

You will create the following URI endpoints on your app:

* `/plugins/cool-thing`
* `/plugins/whatever`

From there, the URI and endpoint structure is determined by your middleware.

## Demo App

For a quick demo of how this works with an Express Router or complete Express
Sub-App, see [the demo folder](/demo).

Run the demo app:

* `cd demo`
* `npm install`
* `node bin/wwww`

Now open [localhost:3000](http://localhost:3000) to view the demo app
and see the plugin end-points.

Be sure to examine [the plugins folder in the demo](/demo/plugins) to see
how simple the middleware / sub-app exports can be.

## Legal Junk

Copyright &copy;2016 Muted Solutions, LLC. All Rights Reserved.

Distributed under [MIT license](http://mutedsolutions.mit-license.org).
