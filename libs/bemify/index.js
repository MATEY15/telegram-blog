class BEMItem {
    constructor(token) {
        this.token = token

        this.parent = null
        this.items = []
        this.child = null
        this.val = token.val

        this.isBlock = this.isBlock(token)
        this.isElement = this.isElement(token)
        this.isModifier = this.isModifier(token)
        this.itemIndex = -1
    }

    updateVal(tree) {
        var newVal = this.val

        if (this.isElement) {
            var block = this.getLastBlock()
            this.token.val = block.val + this.val
        } else if (this.isModifier) {
            var block = this.getLastBlock()
            var element = block.getLastElement()
            this.token.val = block.val + (element ? element.val : "") + this.val
        }
    }

    getLastBlock() {
        return this.getLast((item) => item.isBlock)
    }
    getLastElement() {
        return this.getLast((item) => item.isElement, false)
    }

    getLast(predicate, goLeft = true) {
        var item = this
        var result = null

        var items = null
        var to = 0
        if (item.isItem()) items = item.parent.items
        else items = item.items
        if (!goLeft && item.isItem()) to = item.itemIndex

        for (var i = items.length - 1; i >= to; i--)
            if (predicate(items[i])) {
                result = items[i]
                break
            }
        if (!result && predicate(this.parent)) result = this.parent
        if (!result && item.parent && goLeft) result = item.parent.getLast(predicate)
        return result
    }

    addItem(item) {
        var parent = this.getLastChild()
        parent.items.push(item)
        item.itemIndex = parent.items.length - 1
        item.parent = parent
    }

    getLastChild() {
        var child = this
        while (child.child) child = child.child
        return child
    }

    addChild(child) {
        var parent = this.getLastChild()
        parent.child = child
        child.parent = parent
    }

    removeChild() {
        var child = this.getLastChild()
        if (child.parent)
            if (child.parent.child)
                child.parent.child = null
    }

    print(iteration = 0) {
        var indent = ""
        for (var i = 0; i < iteration; i++)
            indent += " "
        console.log(indent + "\\")
        console.log(indent + "| " + this.val)
        for (var i = 0; i < this.items.length; i++)
            console.log(indent + "+ " + this.items[i].val)
        if (this.child) this.child.print(iteration + 1)
    }

    isBlock(token) {
        return token.type == "class" && Boolean(token.val.match(/^[a-zA-Z]/))
    }
    isElement(token) {
        return token.type == "class" && Boolean(token.val.match(/^_/))
    }
    isModifier(token) {
        return token.type == "class" && Boolean(token.val.match(/^--/))
    }
    isItem() {
        return this.itemIndex >= 0
    }
}


class BemConverter {
    constructor() {
        this.tree = null
        this.tokens = []

        this.prevToken = null
    }

    convert(token) {
        if (token.type == "class" && !token.val.match(/^js-/) && !token.val.match(/^is-/)) {
            var item = new BEMItem(token)
            if (!this.tree) this.tree = item
            else {
                if (this.prevToken.type == "indent") {
                    this.tree.addChild(item)
                } else if (this.prevToken.type == "outdent") {
                    this.tree.removeChild()
                    this.tree.addItem(item)
                } else {
                    this.tree.addItem(item)
                }
            }
            item.updateVal(this.tree)
            this.tokens.push(item.token)
        } else {
            this.tokens.push(token)
        }
        this.prevToken = token
    }

    reset() {
        this.tree = null
        this.tokens = []

        this.prevToken = null
    }
}

module.exports = function() {
    var converter = new BemConverter()
    return {
        postLex: function(tokens) {
            converter.reset()
            tokens.forEach(function(token) {
                converter.convert(token)
            });
            return converter.tokens
        }
    }
};