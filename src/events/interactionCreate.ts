import { Events, ChatInputCommandInteraction } from 'discord.js';

export = {
	name: Events.InteractionCreate,

	async execute(interaction: ChatInputCommandInteraction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({
				content: 'Something broke 💥',
				ephemeral: true,
			});
		}
	},
};