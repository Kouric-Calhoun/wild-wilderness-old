// package com.wildernesswild.wildernesswild.rest.controllers;

// import com.wildernesswild.wildernesswild.Storage.AccountStorage;

// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;

// @Controller
// public class LoginSecurityController {

//     private AccountStorage accountStorage;

//     public LoginSecurityController(AccountStorage accountStorage) {
//         this.accountStorage = accountStorage;
//     }

//     @GetMapping("/login")
//     public String showLoginPage() {
//         return "loginPage";
//     }

//     @GetMapping("/create-account")
//     public String showCreateAccountPage() {
//         return "createAccount";
//     }

//     @PostMapping("/create-account")
//     public String createAccount(String username, String password, String fullName) {
//         Account account = new Account(username, password, fullName, 0, null, true, "USER");
//         accountStorage.saveAccount(account);
//         return "loginPage"; 
//     }
    
// }
