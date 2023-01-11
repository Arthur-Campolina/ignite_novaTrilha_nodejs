import { Readable } from 'node:stream'

//stdin = tudo que o usuário digita no terminal
//stdout = tudo que o terminal retorna
//para testar - node streams/stream.js

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buff = Buffer.from(String(i))
                this.push(buff)
            }
        }, 1000);
    }
}

new OneToHundredStream()
    .pipe(process.stdout)

