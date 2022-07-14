FROM python:3.8.0

WORKDIR /home/

RUN git clone https://github.com/duswns094/pom_home.git

WORKDIR /home/pom_home

RUN pip install -r requirements.txt

RUN echo

RUN python manage.py migrate

EXPOSE 8000

CMD["python", "manage.py", "runserver", "0.0.0.0:8000"]