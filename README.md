# Redirect from project-name.meteor.com to project-name.com

Uses iron-router to implement server-side 301 redirect from whatever.meteor.com to whatever.com

Intended to be deployed when hosting on the free meteor.com test servers, when moving from the test url to your own domain.

## Usage

Point your domain at origin.meteor.com (or use the IP address).

Deploy your actual application to your-domain.com, then deploy this project to your-domain.meteor.com.

## Server-side redirect

Preferred server-side redirect over the typically recommended client-side redirect as I want to be able to forward api queries or even search engine bots. I also wanted it to be applicable to any hostname with a www. so it's a bit regexy and just forwards all requests.

Very simple project... If you need it to be bulletproof or need to issue anything other than 301, PRs are welcome.

## Example

Visit http://languagame.meteor.com

You will be redirected to languagame.com, without the client-side needing to load (even is javascript is disabled on the client)

## Notes

User accounts and any other data will be lost if you were previously operating a functional site on whatever.meteor.com (create/restore a backup as needed yourself, this is just a redirect project).

## Todo

Could be improved by supporting an environment var to decide on destination tld (.com/.co.uk/.gtld/etc)