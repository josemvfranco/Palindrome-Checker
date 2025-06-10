#![no_std]

elrond_wasm::imports!();
elrond_wasm::derive_imports!();

#[elrond_wasm::contract]
pub trait Palindrome {
    #[storage_mapper("palindrome")]
    fn palindrome(&self) -> SingleValueMapper<String<Self::Api>>;

    #[init]
    fn init(&self) {}

    #[endpoint]
    fn set_palindrome(&self, value: String<Self::Api>) {
        self.palindrome().set(&value);
    }

    #[view]
    fn get_palindrome(&self) -> String<Self::Api> {
        self.palindrome().get()
    }

    #[view]
    fn is_palindrome(&self) -> bool {
        let value = self.palindrome().get();
        if value.is_empty() {
            return false;
        }
        let normalized: String<Self::Api> = value
            .to_lowercase()
            .chars()
            .filter(|c| c.is_alphanumeric())
            .collect();
        let reversed: String<Self::Api> = normalized.chars().rev().collect();
        normalized == reversed
    }
}
