# The All New Cybertronic Poller Mailer

I decided to see how much fun it would be to write an elixir app to 
 * poll an API on one process and maintain a read model of "things" to deal with
 * poll a second API on another process for each of the "things" of the read model built by the first process
 * when the second API indicates "a change" call a third artificially slow API to simulate sending a notification of that change.

 I.e. if the read model contains 200 items there would be 200 processes each polling to check for notifications

 ## Why

 * it's weeks since I last wrote Elixir and it's always fun when I do so I thought I'd play with it
 * this is the kind of problem I'd normally want to delegate to a queue and I wondered how much I could avoid that with this approach
 * my kids are all in bed

 TODO

 - [x] set up API one
 - [x] set up API two
 - [x] set up API three
 - [ ] elixir read model builder
 - [ ] elixir read model pollers
 - [ ] elixir notifier(s?)