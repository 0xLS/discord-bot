deploy:
	docker compose run --rm deploy

start:
	docker compose up bot

build:
	docker build -t discord-bot .