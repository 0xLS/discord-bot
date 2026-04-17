start:
	docker compose up -d bot

stop:
	docker compose down

restart:
	docker compose down
	docker compose up -d bot

deploy:
	docker compose run --rm deploy

logs:
	docker logs -f discord-bot