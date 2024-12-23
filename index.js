const { readFile } = require('fs');
const { Volume } = require('memfs');
const { Script } = require('vm');

let vol = new Volume();

readFile('script.txt', 'utf8', (err, data) => {
    if (err) {
        throw new Error(err);
    } else {
        vol.writeFile('/my-code-here.js', data, 'utf8', () => {
            vol.readFile('/my-code-here.js', 'utf8', (err, ram_data) => {
                if (err) {
                    throw new Error(err);
                } else {
                    const script = new Script(ram_data);
    
                    script.runInThisContext();
                };
            });
        });
    };
});
