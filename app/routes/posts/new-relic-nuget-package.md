---
author: "Mike Cousins"
category: "Development"
date: 2012-05-01T19:32:45Z
description: ""
draft: false
slug: "new-relic-nuget-package"
tags: ["Microsoft Azure", "TeamCity", "New Relic", "Nuget"]
title: "New Relic NuGet package: Automatic building and publishing with TeamCity"
cover: "https://www.fillmurray.com/200/300"

---

I'm a big fan of New Relic (http://newrelic.com) server/application monitoring
and last year I created a NuGet package
(http://nuget.org/packages/NewRelicWindowsAzure) for them. I wanted to make it
easy for people to get New Relic going in an Azure environment and NuGet solves
that problem. I've used it in production on Shuttr (https://shuttr.com)  ever
since. I approached New Relic when I began work on it, but they didn't seem all
that interested or maybe I didn't find the right people to talk to. Just last
week I was approached by Nick Floyd (http://archcoder.com/) from New Relic with
some interest in my NuGet package.

I've decided to open source my package so that New Relic can contribute to it,
as well as anybody else who's interested. I've thrown it up on GitHub
(https://github.com/mikecousins/newrelicazurenuget). Feel free to fork, send
pull requests, add issues, comment on issues, etc.

I also setup a pretty cool automatic build and publishing system using TeamCity
and wanted to share the setup. If you're interested in maintaining a NuGet
package this is a great way to go.

Add a new build configuration for your project.

On the general settings tab set your artifact path to "output".

Add your VCS settings for your source control system. I use GitHub for the New
Relic package which is easy to add.

You will want to add two build steps, one for building the package and one for
publishing it to the NuGet gallery [http://nuget.org].

The build step runner is of type "NuGet Pack". Make sure to specify your .nuspec
file that you want to build here. Set the output directory to "output". This
must match the artifact path that you set on the general settings tab.

The publish step runner is of type "NuGet Publish". Set your package to upload
to "output/*".

You can get your NuGet API Key from your NuGet account page
(https://nuget.org/account).

I added a trigger so that this happens automatically on any commit to our GitHub
repository.

And that's it, now you'll get your package published automatically into the
NuGet gallery on every commit into your source control system!
