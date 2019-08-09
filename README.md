# sendamp
This is a super simple nodejs app that allows you to send test email with amp.

## Setup
To use the tool, first set the sender credentials in config.js

For outlook365, use
- user: 'test@outlook.com',
- password: 'balabala',
- service: '**Outlook365**'

For gmail, use
- user: 'test@gmail.com',
- password: 'balabala',
- service: '**Gmail**'

## Syntax
node app.js -t "amphtmltest@outlook.com" -s "Hello AMP from sendamp tool" -a "HelloAmp.html"

Or the long one:

node app.js --to "amphtmltest@outlook.com" --subject "Hello AMP from sendamp tool" --ampfile "HelloAmp.html"

## Known issues
From testing so far, it worked for gmail to gmail, or gmail to outlook, but not outlook to outlook. For outlook to outlook, there will be two copies of the email, one in sender's sent items and the other in receiver's inbox. The one in sent items will work which has the amp. The one in receiver's inbox won't have the amp.
