export interface Trie {
    insert(word: string): void;
    search(word: string): boolean;
    startsWith(prefix: string): boolean;
}

export class TrieImpl implements Trie {
    public isWord = false;
    private children: { [key: string]: TrieImpl } = {};

    insert(word: string): void {
        if (!word) {
            return;
        }
        const firstChar = word[0];
        if (!this.children[firstChar]) {
            this.children[firstChar] = new TrieImpl();
        }
        if (word.length > 1) {
            this.children[firstChar].insert(word.substr(1));
        } else {
            this.children[firstChar].isWord = true;
        }
    }
    search(word: string): boolean {
        if (!word) {
            return false;
        }
        const firstChar = word[0];
        if (!this.children[firstChar]) {
            return false;
        }
        if (word.length > 1) {
            return this.children[firstChar].search(word.substr(1));
        } else {
            return this.children[firstChar].isWord;
        }
    }
    startsWith(prefix: string): boolean {
        if (!prefix) {
            return true;
        }
        const firstChar = prefix[0];
        if (!this.children[firstChar]) {
            return false;
        }
        return this.children[firstChar].startsWith(prefix.substr(1));
    }
}
