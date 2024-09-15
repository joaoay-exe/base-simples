module.exports = {
    name: 'interactionCreate',
    run: async (interaction) => {
        const cmd = interaction.client.slash.find(c => c.name === interaction.commandName)
        if(interaction.isCommand()){
            cmd.run(interaction)
            return
        }
    }
}