import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../types/command';

const command: Command = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Say hello'),

	async execute(interaction) {
		await interaction.reply(`Hello ${interaction.user.username}! 👋`);
	},
};

export = command;