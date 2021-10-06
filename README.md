#HyperSpace-SocialMedia 

---

This is the client side, a server side exists [RedBadgeServer](https://github.com/BrentonPhoenix/RedBadgeServer)

This project is deployed to heroku along with the server here [HyperSpace-SocialMedia](https://hyperspace-sm.herokuapp.com/). It is under a Hobby Developer Account, so it exists under some restrictions however it should suffice for a demo.

**If you wish to clone this repository please first see my Copyright Notice that exists at the bottom of this readme.**

---

This project is intended to create a social media site that is tailored to people with ADHD. Currently it is a work in progress. 
Needs:
    []-Styling
    []-Input fields to expand functionality beyond the minimum
        []1. set active to true 
        []2. change active status 
        []3. image altid
        []4. EVENTUALLY color fields so people can change the theme manually 
    []-profile with their active topics
    []-friends list
    []-comments
    []-footer
    []-Admin opitions
    []-protected routes for the other components
        []1. one by one **sigh** _assuming I don't figure out how to pass the components as a kind of prop, While still passing those components props_
    []-and many many more i'm not listing out *everything* right this second. I'll update the list whenever i complete items i guess? maybe just when they're all done.

---

The current state of the project has only about 40% of the eventual functionality i desire, and I probably won't open it up to contributions until I have it reach my own personal Definition of Done.

---

Currently the functionality that exists within the client:

1. Router functional
    -Protected Route functional but has to be set for each page. Only set up in Admin, template file set up.
2. Topics fetch requests functional *full CRUD*
    -Topics display properly 
3. Post requests mostly functional except for 1 get request which is being annoying.
4. Home switches display based on login status
5. Logout functions as expected.
6. Grid sort of works _technically_

---

####COPYRIGHT NOTICE: **At this time I am not offering any license in regards to this project. Mostly because I don't know what they do specifically. I intend to have one picked out by Jan 2022 and if I have not feel free to contact me. **