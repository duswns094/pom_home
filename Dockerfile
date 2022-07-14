FROM python:3.8.0

WORKDIR /home/

RUN git clone https://github.com/duswns094/pom_home.git

WORKDIR /home/pom_home

RUN pip install -r requirements.txt

RUN echo "SECRET_KEY=django-insecure-xx!b9z$6f(!%e$y21j3ec5uf7h7d7s31d@rksg7oshx&@j+5m(" > .env

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]