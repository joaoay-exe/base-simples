module.exports = {
    name: 'ping',
    description: '[]',
    run: async (interaction) => {
        interaction.reply({ content: `Meu ping está: ${interaction.client.ws.ping}ms`})
    }
}