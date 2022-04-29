# PS4
Andrew Pratt, Reilly Short, Wilson McCloy


Problem 1.)

https://simplymusic.herokuapp.com

Our Django backend has been deployed through Heroku and has been populated using an intial fixture file so that there are already several users, ratings, and artist bios.  Improving on the areas in which we lost points for HW3, we were able to use validators to make sure ratings can only be 0-5 and years for album release dates 1800-2022.

https://simply-music.web.app

Our React frontend has been deployed through Firebase, but despite countless hours of debugging, adjusting urls, rewriting API calls, etc, does not connect to the Django backend on Heroku.

Problem 2.)

In the Django backend directory:

source my-venv/bin/activate

python manage.py makemigrations

python3 manage.py migrate

python3 manage.py loaddata initial.json

python3 manage.py runserver

In the the React Native frontend directory:

