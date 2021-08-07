package com.wildernesswild.wildernesswild.Storage;

import com.wildernesswild.wildernesswild.models.Account;
import com.wildernesswild.wildernesswild.repositories.AccountRepository;

import org.springframework.stereotype.Service;

@Service
public class AccountStorage implements AccountRepository {
    private AccountRepository accountRepo;
    public AccountStorage (AccountRepository accountRepo) {
        this.accountRepo = accountRepo;
    }

    public void addAccount(Account accountToAdd) {
        accountRepo.save(accountToAdd); 
    }
}
