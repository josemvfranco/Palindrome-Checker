// Simple MultiversX smart contract for palindrome storage and verification
import { SmartContract, storage, method, view } from '@multiversx/sdk-core';

export class PalindromeContract extends SmartContract {
    @storage.variable()
    palindrome;

    @method()
    async setPalindrome(value) {
        this.palindrome.set(value);
    }

    @view()
    async getPalindrome() {
        return this.palindrome.get();
    }

    @view()
    async isPalindrome() {
        const value = this.palindrome.get();
        if (!value) {
            return false;
        }
        const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversed = normalized.split('').reverse().join('');
        return normalized === reversed;
    }
}
