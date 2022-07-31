---
author: "Mike Cousins"
category: "Tech"
date: 2016-09-11T06:42:27Z
description: ""
draft: false
slug: "enterprise-quality-wifi-at-home"
tags: ["Tech"]
title: "Enterprise quality WiFi at home"
cover: "https://www.fillmurray.com/200/300"

---

What if you could get enterprise quality WiFii at home for a price that is much
more closer to regular home prices? That's the dream that Ubiquiti promises with
their Unifi line of networking gear.

What most people call a router is actually several devices combined into one: a
router, a switch and a wireless access point. To get the best performance and
have the best upgrade cycle, I strongly recommend splitting them up. By saying
the best upgrade cycle I mean this: you will end up replacing network gear in
your lifetime and you should replace only what you need to. When a new WiFi
standard comes out with way faster speeds, simply replace the access point(s).
Buy a nice switch with enough ports for your future needs and you won't need to
replace it until 10GbE gear comes down in price. Buy a nice router and you won't
need to replace it until you have internet speeds greater than 1gb/s.

Interface

The Ubiquiti Unifi interface is probably my favourite part of the whole system.
Just look at this:



It's very powerful, while also being incredibly easy to use and nice to look at.
It shames most router interfaces that look like they were designed back when
people hosted sites on Geocities. Most of them look like this:



Modem

The first stop as data flows into your house is your modem. Nowadays ISPs are
even trying to bundle modems into a single box with wireless routers. These are
great for light usage, but can't handle much in the way of traffic or
configuration. You're going to want to ask your ISP for either a separate modem
or a modem/router combination that can be put into "bridge mode". Bridge mode
basically disables the router functionality, which is what we want because we'll
be using our own router.

Router

After the modem, we need to add a router. A router takes your IP address that
the ISP gives you on the public and creates a private network with each
computer/device in your network having it's own private IP address. For heavy
downloading/gaming/etc you want a nice stable router, that can handle a lot of
connections and has good throughput. Cheaper routers can be overwhelmed in these
situations and need to be rebooted. Ubiquiti sells a router called the Ubiquiti
Unifi Security Gateway (USG). It's a great router for a bit over a hundred
dollars. Super stable, can handle a ton of connections at once and a simple,
easy to use UI to configure it.

Unifi Router: https://www.ubnt.com/unifi-routing/usg/



Switch

The Ubiquiti Unifi Switch is a great switch but also pretty expensive. Their
wheelhouse is in PoE switches, as all of theirs come with PoE. This adds to the
price and I decided not to go with one because of this. Their access points come
with injectors so the wiring is a bit messier but I saved a couple hundred bucks
going with a Cisco switch instead.

Unifi Switches: https://www.ubnt.com/enterprise/#unifi-switch:hardware
Cisco Switch:
http://www.cisco.com/c/en/us/support/switches/sg200-26-26-port-gigabit-smart-switch/model.html

Access Points

We wired our house with a ceiling mounted Ethernet jack on each floor
specifically for adding wireless access points after we moved in. These have
many benefits to the average user:

 * You get great coverage because there is always an access point nearby. I get
   a solid 5 bars everywhere in the house.
 * They keep wiring completely hidden. They basically just look like another
   sleek smoke detector, with no exposed wires at all.

Unifi Access Point: https://www.ubnt.com/unifi/unifi-ap-ac-pro/
