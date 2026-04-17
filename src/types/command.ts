import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface Command {
	data: {
		toJSON: () => any;
		name: string;
	};
	execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}