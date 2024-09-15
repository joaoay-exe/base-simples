module.exports = {
    name: 'ready',
    run: async (client) => {
        console.log('✅ Bot iniciado com sucesso')
        console.log(`Logado em ( ${client.user.username} )`)
    }
}