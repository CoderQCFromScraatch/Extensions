function unitRatio(args) {
    try {
        var nums = args.RATIO.split(":")
    } catch {
        return 0;
    }
    var divider = nums[0] + 1
    while (true) {
        if (divider == undefined || nums[0] == undefined || nums[1] == undefined || nums[0] % 1 != 0 || nums[1] % 1 != 0) {
            divider = 0
            break
        }
        divider = divider - 1


        if (Math.floor(nums[1] / divider) === nums[1] / divider) {
            if (Math.floor(nums[0] / divider) === nums[0] / divider) {
                divider = divider + 0
                break
            }
        }

    }
    var ans = nums[0] / divider + ":" + nums[1] / divider;
    if (ans.includes("NaN") || ans == "Infinity:Infinity" || ans == undefined) {
        ans = 0
    }
    return ans;
}




//Define main class
class RatiosExtension {
    getInfo() {
        return {
            id: 'ratios',
            name: 'Ratios',

            blocks: [{
                    opcode: 'ratio',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] to [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '4'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        }
                    }
                },
                {
                    opcode: 'unitRatio',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'find unit ratio of [RATIO]',
                    arguments: {
                        RATIO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'ratioParts',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get the [THING] of ratio [RATIO]',
                    arguments: {
                        THING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '01: numerator',
                            menu: 'ratiosThings'
                        },
                        RATIO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'fractionToRatio',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[DEC] decimal to ratio',
                    arguments: {
                        DEC: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0.5'
                        }
                    }
                },
                {
                    opcode: 'findProportion',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] and [TWO] are proportional?',
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
            ],

            menus: {
                ratiosThings: {
                    acceptReporters: true,
                    items: ['01: numerator', '02: denominator', '03: decimal interpretation']
                }
            }
        };
    }

    ratio(args) {
        return args.ONE + ":" + args.TWO;
    }

    unitRatio(args) {

        var ans = unitRatio(args)
        return ans
    }

    findProportion(args) {
        var ans = unitRatio({
            "RATIO": args.ONE
        }) == unitRatio({
            "RATIO": args.TWO
        })
        if (typeof(args.ONE) != "string" || typeof(args.TWO) != "string") {
            ans = false
        }
        return ans

    }
    ratioParts(args) {
	try {
        var nums = args.RATIO.split(":")
	} catch {return args.RATIO}
        if (args.THING.substr(0, 2) >= 1 && args.THING.substr(0, 2) <= 2) {
            var ans = nums[args.THING.substr(0, 2) - 1]
        }
        if (args.THING.substr(0, 2) == 3) {
            var ans = nums[0] / nums[1]
        }
        if (typeof(ans) != "number" && typeof(ans) != "string") {
            ans = ""
        }
        return ans
    }
    fractionToRatio(args) {
        var mx = 1
	while (mx*args.DEC % 1 != 0) {
	if (typeof(args.DEC) != 'number') {
mx = null
break
}
	mx = mx + 1
}

	var ans = (mx * args.DEC) + ":" + mx 
	if (typeof(ans) != "string" || ans.includes("null")) {ans = ""}
	return ans 
     }
}

Scratch.extensions.register(new RatiosExtension());