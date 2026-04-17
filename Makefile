start:
	docker compose up -d --build bot

stop:
	docker compose down

restart:
	docker compose down
	docker compose up -d --build bot

deploy:
	docker compose run --rm deploy

logs:
	docker logs -f discord-bot