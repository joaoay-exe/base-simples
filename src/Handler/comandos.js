const { Collection } = require('discord.js');
const fs  = require('fs');
const path = require('path');

module.exports = {
    run: async (client) => {
        const Raiz = 'src/Comandos' //Local da pasta raiz de comandos
        const pastas = fs.readdirSync(Raiz);
        const comandos = [];
        client.slash = new Collection();

        for (const pasta of pastas) {
            const arquivos = fs.readdirSync(`${Raiz}/${pasta}`);
            for (const arquivo of arquivos) {
                const cmd = require(path.join(process.cwd(), `${Raiz}/${pasta}/${arquivo}`)); //caminho da pasta e o arquivo

                client.slash.set(cmd.name, cmd);
                comandos.push(cmd);
            }
        }
        client.on("ready", () => { 
            client.application.commands.set(comandos) 
        });
    }
}