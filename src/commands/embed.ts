import {
	SlashCommandBuilder,
	EmbedBuilder,
	ChatInputCommandInteraction
} from 'discord.js';

import { Command } from '../types/command';

const data = new SlashCommandBuilder()
	.setName('embed')
	.setDescription('Create a custom embed message')
	.addStringOption(option =>
		option
			.setName('title')
			.setDescription('Title of the embed')
			.setRequired(true)
	)
	.addStringOption(option =>
		option
			.setName('description')
			.setDescription('Description of the embed')
			.setRequired(true)
	);

const execute = async (interaction: ChatInputCommandInteraction) => {
	const title = interaction.options.getString('title', true);
	const description = interaction.options.getString('description', true);

	const embed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(0x5865F2)
		.setFooter({ text: `Created by ${interaction.user.username}` })
		.setTimestamp();

	await interaction.reply({
		embeds: [embed]
	});
};

const command: Command = {
	data,
	execute
};

export = command;