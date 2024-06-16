# nodejs-express-typescript-demo
Nodejs+Express.js &amp; Typescript

Nodejs using the common.js Require syntax and for development we will use the import syntax. 

This is the regular common.js import syntax

which note.js uses by default,

but here we're actually in an environment in TypeScript

where we can use a different import syntax.

We can use the same import syntax we know

from ES modules in the browser.

So we can use "import express from 'express'" for example.

And if we do that and then hover over "app",

you see now it's of type 'Express'.

So now we've got TypeScript support.

Now, one important note.

In note.js there also exists a syntax

which is similar to this one.

Now it's under an experimental flag,

and it's been under that flag for a very long time,

so using common.js in note.js is by far the default

and most common way of adding imports and exports.

Syntax looking like this one is supported

if you set this experimental flag,

but here in this code

we're actually not using this experimental node.js syntax.

Instead we're using TypeScript.

Once we compile this to JavaScript this will change.

And I can actually show this to you

so that we can also execute this.

If you run "tsc" here,

maybe "tsc-w" to already enter watch mode,

you see this starts compilation.

It creates a dist folder,

and in there we now have an app.js file,

and in here, this now looks different.

You see, there it now doesn't set up that import

the way we have it here.

It uses a different syntax instead.

So here, this is the code which actually will get executed.