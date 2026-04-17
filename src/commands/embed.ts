import {
	SlashCommandBuilder,
	ChatInputCommandInteraction,
	ModalBuilder,
	TextInputBuilder,
	TextInputStyle,
	ActionRowBuilder
} from 'discord.js';

import { Command } from '../types/command';

const data = new SlashCommandBuilder()
	.setName('embed')
	.setDescription('Open embed builder');

const execute = async (interaction: ChatInputCommandInteraction) => {
	const modal = new ModalBuilder()
		.setCustomId('embedModal')
		.setTitle('Embed Builder');

	const titleInput = new TextInputBuilder()
		.setCustomId('embedTitle')
		.setLabel('Title')
		.setStyle(TextInputStyle.Short)
		.setRequired(true);

	const descriptionInput = new TextInputBuilder()
		.setCustomId('embedDescription')
		.setLabel('Description')
		.setStyle(TextInputStyle.Paragraph)
		.setRequired(true);

	const titleRow = new ActionRowBuilder<TextInputBuilder>().addComponents(titleInput);
	const descRow = new ActionRowBuilder<TextInputBuilder>().addComponents(descriptionInput);

	modal.addComponents(titleRow, descRow);

	await interaction.showModal(modal);
};

const command: Command = {
	data,
	execute
};

export = command;