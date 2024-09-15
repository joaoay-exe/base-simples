const { readdirSync } = require('fs')
const { join } = require('path')

module.exports = {
    run: async (client) => {
        const Raiz = 'src/Eventos'
        const pastas = readdirSync(Raiz)

        for (const pasta of pastas) {
            const arquivos = readdirSync(`${Raiz}/${pasta}`)
            for (const arquivo of arquivos) {
                const caminho = require(join(process.cwd(), `${Raiz}/${pasta}/${arquivo}`))
                const evt = (caminho)
                if (evt.once) {
                    client.once(evt.name, (...args) => evt.run(...args));
                } else {
                    client.on(evt.name, (...args) => evt.run(...args));
                }
            }
        }

    }
}