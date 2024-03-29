var tempvar = ""; 
var audios = []

class CQCExtraExtension {
    constructor(runtime,extensionId) {
        this.runtime = runtime;

    }
    getInfo() {
        return {
            id: 'cqcextra',
            color1: '#342F77',
            color2: '#6d67c2',
            name: "CoderQC",
            description: `CoderQC's advanced tools for everyone to use!`,
            docsURI: 'https://www.coderqc.info/docs/cqcextra?read_current=1',

            blocks: [{
                    opcode: 'getPublicIP',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Public IP Address',
                },
                {
                    opcode: 'getOS',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'OS Information',
                },
                {
                    opcode: 'time',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Time',
                },
                                     {
                    opcode: 'temp',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Temporary Variable',
                },
                {
                    opcode: 'getScreenRes',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Screen [param]',
                    arguments: {
                        param: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'screen',
                            defaultValue: 'width'
                        }
                    }
                },
                {
                    opcode: 'fetchSomething',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Fetch from [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://extensions.turbowarp.org/hello.txt'
                        }
                    }
                },
                {
                    opcode: 'parseJSON',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get value of [key] in dictionary [dict]',
                    arguments: {
                        key: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        dict: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },

                {
                    opcode: 'changeJSON',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Set value of [key] to [val] in dictionary [dict]',
                    arguments: {
                        key: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        val: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        dict: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'sendData',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Send data [DATA] as of user [NAME] to the data server [POST]',
                    arguments: {
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        POST: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                	// this feature sucks lol
                                {
                                    opcode: 'convertBase',
                                    blockType: Scratch.BlockType.REPORTER,
                                    text: 'convert [num] in base [from] to base [to]',
                                    arguments: {
                                        num: {
                                            type: Scratch.ArgumentType.NUMBER,
                                            defaultValue: ' '
                                        },

                                        from: {
                                            type: Scratch.ArgumentType.STRING,
                                            menu: 'base',
                                            defaultValue: '(10): decimal'
                                        },
                                        to: {
                                            type: Scratch.ArgumentType.STRING,
                                            menu: 'base',
                                            defaultValue: '(16): hex'
                                        }
                                    }
                                },
                {
                    opcode: 'calcPercent',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[value]% of [total] * 4',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5'
                        },

                        total: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                },
                {
                    opcode: 'calcGoodPercent',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[value]% of [total]',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '20'
                        },

                        total: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                },

                {
                    opcode: 'exponets',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[Exp1] ^ [Exp2]',
                    arguments: {
                        Exp1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5'
                        },

                        Exp2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        }
                    }
                },
                                     {
                    opcode: 'ramSaver',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Optimize number [num]',
                    arguments: {
                        num: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'color',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'color [return]',
                    func: 'return',
                    arguments: {
                        return: {
                            type: Scratch.ArgumentType.COLOR,
                            defaultValue: '#463a92'
                        }
                    }
                },
                {
                    opcode: 'matrix',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'matrix [return]',
                    func: 'return',
                    arguments: {
                        return: {
                            type: Scratch.ArgumentType.MATRIX,
                            defaultValue: '0111010001100010111000011'
                        }
                    }
                },
                {
                    opcode: 'angle',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'direction [return]',
                    func: 'return',
                    arguments: {
                        return: {
                            type: Scratch.ArgumentType.ANGLE,
                            defaultValue: '90'
                        }
                    }
                },
                {
                    opcode: 'note',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'note [return]',
                    func: 'return',
                    arguments: {
                        return: {
                            type: Scratch.ArgumentType.NOTE,
                            defaultValue: '60'
                        }
                    }
                },
                {
                    opcode: 'undefBlock',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[val]',
                    arguments: {
                        val: {
                            type: Scratch.ArgumentType.NUMBER,
                            menu: 'undef',
                            defaultValue: 'null'
                        }
                    }
                },
                {
                    opcode: 'DoXOR',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] or [TWO] but not both',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: ''
                        },
                        TWO: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: ''
                        }
                    }
                },
                {
                    opcode: 'isUppercase',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[val] is all uppercase?',
                    arguments: {
                        val: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'A'
                        }
                    }
                },
                {
                    opcode: 'strictlyEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] == [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'approxEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] ~ [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '3'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '3.141'
                        }
                    }
                },
                {
                    opcode: 'JSCode',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Execute JS Code [code]',
                    arguments: {
                        code: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: `console.log("I'm here!")`
                        }
                    }
                },
                {
                    opcode: 'playSound',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Play sound from URL [url]',
                    arguments: {
                        url: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: `https://link.coderqc.info/testsound`
                        }
                    }
                },
                                     {
                    opcode: 'stopSound',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Stop sound at index [index]',
                    arguments: {
                        index: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: `1`
                        }
                    }
                },
                {
                    opcode: 'discard',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Discard value [val]',
                    arguments: {
                        code: {
                            type: Scratch.ArgumentType.STRING,
                        }
                    }
                },
                {
                    opcode: 'cont',
                    blockType: Scratch.BlockType.COMMAND,
                    terminal: true,
                    text: '//[text]',
                    func: 'discard',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                }
            ],
            menus: {
                undef: {
                    items: ["null", "undefined", "pi", "e"]
                },
                screen: {
                    items: ["width", "height", "color depth", "color resolution", "taskbar width", "taskbar height"]
                },
                base: {
                    items: ["(2): binary", "(8): octal", "(10): decimal", "(16): hex"]
                }
            }
        }
    }

    
    fetchSomething(args) {
        return fetch(args.URL)
            .then(r => r.text())
            .catch(() => '');
    }
    exponets(args) {
        return args.Exp1 ** args.Exp2
    }
    getPublicIP(args) { 
        return fetch('https://api64.ipify.org').then(function(response) {
            return response.text()
        })        
    }
    DoXOR(args) {
        return args.ONE != args.TWO
    }
    strictlyEquals(args) {
        return args.ONE === args.TWO;
    }
    approxEquals(args) {
        if (args.ONE !== " " || args.ONE !== "" || args.TWO !== " " || args.TWO !== "") {
            return Math.floor(args.ONE) == Math.floor(args.TWO)
        } else {
            return false
        }
    }
    JSCode(args) {
        eval(args.code)
    }
        temp(args) {
            
        var thing = JSON.stringify(tempvar, null, 4);
            if (thing.startsWith('"')) {
            thing = thing.slice(1)
            }
                        if (thing.endsWith('"')) {
            thing = thing.slice(0,thing.length-1)
                        };
            return thing
    }
        playSound(args) {
            audios.push(new Audio(args.url));
        var audio = audios[audios.length - 1]
        var audindex = audios.length - 1
        audio.play();
            audio.addEventListener('ended', (event) => {
         audios.pop(audindex)
});
    }
            stopSound(args) {
        var audio = audios[args.index - 1]
        audio.pause();
        audios.pop(args.index - 1)
    }
    discard(args) {}
    getOS(args) {
        return navigator.appVersion
    }
    undefBlock(args) {
        if (args.val == "null") {
            return null
        }
        if (args.val == "undefined") {
            return undefined
        }
        if (args.val == "pi") {
            return Math.PI
        }
        if (args.val == "e") {
            return Math.E
        }
    }
    getScreenRes(args) {
        if (args.param == "width") {
            return screen.width
        }
        if (args.param == "height") {
            return screen.height
        }
        if (args.param == "color depth") {
            return screen.colorDepth
        }
        if (args.param == "color resolution") {
            return screen.pixelDepth
        }
        if (args.param == "taskbar width") {
            return screen.width - screen.availWidth
        }
        if (args.param == "taskbar height") {
            return screen.height - screen.availHeight
        }
    }
    calcGoodPercent(args) {
        return args.total * args.value / 100
    }
    return (args) {
        return args.return
    }
    convertBase(args) {
        var from = args.from
        var to = args.to
        if (from.startsWith("(2)")) {
            var from = 2
        }
        if (from.startsWith("(8)")) {
            var from = 8
        }
        if (from.startsWith("(10)")) {
            var from = 10
        }
        if (from.startsWith("(16)")) {
            var from = 16
        }
        if (to.startsWith("(2)")) {
            var to = 2
        }
        if (to.startsWith("(8)")) {
            var to = 8
        }
        if (to.startsWith("(10)")) {
            var to = 10
        }
        if (to.startsWith("(16)")) {
            var to = 16
        }

        

        return args.num.toString(to)
    }
    isUppercase(args) {
        return String(args.val) == String(args.val).toUpperCase();
    }
    calcPercent(args) {
        return args.value / args.total * 100
    }
        ramSaver(args) {
        return String(args.num)
    }
    parseJSON(args) {
        var jsa = ""
        try {
            jsa = JSON.parse(args.dict)[args.key]
        } finally {
            if (jsa == undefined) {
                jsa = ""
            }
                        if (typeof(jsa) == "object") {
                jsa = JSON.stringify(jsa)
            }
            return jsa
        }

    }
    changeJSON(args) {
        var jsa = ""
        try {
            jsa = JSON.parse(args.dict)
            jsa[args.key] = args.val
            jsa = JSON.stringify(jsa)
        } finally {
            if (jsa == undefined) {
                jsa = ""
            }
            return jsa
        }
    }
    time(args) {
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        return h + ":" + m + ":" + s;
    }
    sendData(args) {
        // Build formData object.
        let formData = new FormData();
        formData.append('data', args.DATA);
        formData.append('name', args.NAME);

        return fetch(args.POST, {
                body: formData,
                method: "post"
            }).then((res) => res.text())
            .then((data) => {
                return data
            }).catch((err) => {
                return ""
            });
    }
}
Scratch.extensions.register(new CQCExtraExtension());
