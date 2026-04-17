import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { REST, Routes } from 'discord.js';

const commands: any[] = [];

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(path.join(commandsPath, file));
	console.log("Loaded command:", command.data?.name);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN as string);

(async () => {
	try {
		console.log('Deploying slash commands...');

		await rest.put(
			Routes.applicationGuildCommands(
				process.env.CLIENT_ID!,
				process.env.GUILD_ID!
			),
			{ body: commands }
		);

		console.log('Commands deployed 🚀');
	} catch (error) {
		console.error(error);
	}
})();