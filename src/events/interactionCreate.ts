import {
	Events,
	EmbedBuilder
} from 'discord.js';

export = {
	name: Events.InteractionCreate,

	async execute(interaction: any) {

		// -----------------------------
		// Slash commands
		// -----------------------------
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
			if (!command) return;

			await command.execute(interaction);
			return;
		}

		// -----------------------------
		// Modal submit
		// -----------------------------
		if (interaction.isModalSubmit()) {
			if (interaction.customId !== 'embedModal') return;

			const title = interaction.fields.getTextInputValue('embedTitle');
			const description = interaction.fields.getTextInputValue('embedDescription');

			const embed = new EmbedBuilder()
				.setTitle(title)
				.setDescription(description)
				.setColor(0x5865F2)
				.setFooter({ text: `Created by ${interaction.user.username}` })
				.setTimestamp();

			await interaction.reply({
				embeds: [embed]
			});
		}
	}
};