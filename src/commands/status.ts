import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { Command } from '../types/command';

const command: Command = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Sends an embedded message'),

	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle('System Report')
			.setDescription('Everything is running smoothly 🧠⚙️')
			.addFields(
				{ name: 'Latency', value: '12ms', inline: true },
				{ name: 'Status', value: 'Operational', inline: true }
			)
			.setColor(0x00ff99)
			.setTimestamp();

		await interaction.reply({
			embeds: [embed]
		});
	}
};

export = command;