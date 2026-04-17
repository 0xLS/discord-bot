import { Events, Client } from 'discord.js';

require('../deploy-commands');

export = {
  name: Events.ClientReady,
  once: true,

  execute(client: Client) {
    console.log(`Logged in as ${client.user?.tag}`);
  },
};