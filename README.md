# Redirect from www to hostname on meteor.com test host

Uses iron-router to implement server-side 301 redirect from www.mydomain.com to mydomain.com

Intended to be deployed when hosting on the free meteor.com test servers, with your own domain.

## Usage

Point your domain at origin.meteor.com (or use the IP address).

Deploy your actual application to your-domain.com, then deploy this project to www.your-domain.com.

## Server-side redirect

Preferred server-side redirect over the typically recommended client-side redirect as I want to be able to forward api queries or even search engine bots. I also wanted it to be applicable to any hostname with a www. so it's a bit regexy and just forwards all requests.

Very simple project... If you need it to be bulletproof or need to issue anything other than 301, PRs are welcome.

## Example

Visit http://www.tabcycle.com (notice the www)

You will be redirected to tabcycle.com, without the client-side needing to load (even is javascript is disabled on the client)