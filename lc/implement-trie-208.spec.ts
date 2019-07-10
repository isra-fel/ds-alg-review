import { Trie, TrieImpl } from './implement-trie-208';

describe('208. Implement Trie (Prefix Tree)', () => {
    let trie: Trie;
    beforeEach(() => {
        trie = new TrieImpl();
    });
    it('can search words', () => {
        trie.insert('apple');
        expect(trie.search('apple')).toBeTruthy();
        expect(trie.search('app')).toBeFalsy();
        expect(trie.search('applepie')).toBeFalsy();
        expect(trie.search('')).toBeFalsy();
        expect(trie.search('apale')).toBeFalsy();
        trie.insert('app');
        expect(trie.search('app')).toBeTruthy();
    });

    it('can search by prefix', () => {
        trie.insert('apple');
        expect(trie.startsWith('')).toBeTruthy();
        expect(trie.startsWith('app')).toBeTruthy();
        expect(trie.startsWith('apple')).toBeTruthy();
        expect(trie.startsWith('apx')).toBeFalsy();
        expect(trie.startsWith('applepie')).toBeFalsy();
        trie.insert('typhoon');
        expect(trie.startsWith('typ')).toBeTruthy();
    });
});
