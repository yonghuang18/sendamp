# sendamp
This is a nodejs app that allows you to send email with amp.

To use the tool, first set the sender credentials in config.js

For outlook365, use
- user: 'test@outlook.com',
- password: 'balabala',
- service: '**Outlook365**'

For gmail, use
- user: 'test@gmail.com',
- password: 'balabala',
- service: '**Gmail**'

Then run the tool like below:
node app.js -t "amphtmltest@outlook.com" -s "Hello AMP from sendamp tool" -a "HelloAmp.html"

Or the long one:
node app.js --to "amphtmltest@outlook.com" --subject "Hello AMP from sendamp tool" --ampfile "HelloAmp.html"
