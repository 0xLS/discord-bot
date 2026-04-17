import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { Command } from './types/command';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// Extend client type
declare module 'discord.js' {
	interface Client {
		commands: Collection<string, Command>;
	}
}

client.commands = new Collection();

// 🔥 Auto-load commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command: Command = require(path.join(commandsPath, file));
	client.commands.set(command.data.name, command);
}

// 🔥 Auto-load events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts'));

for (const file of eventFiles) {
	const event = require(path.join(eventsPath, file));

	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(process.env.TOKEN);