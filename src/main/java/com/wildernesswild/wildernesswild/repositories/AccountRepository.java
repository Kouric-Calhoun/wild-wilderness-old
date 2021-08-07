package com.wildernesswild.wildernesswild.repositories;

import org.springframework.data.repository.CrudRepository;
import com.wildernesswild.wildernesswild.models.Account;

public interface AccountRepository extends CrudRepository<Account, Long> {

}
