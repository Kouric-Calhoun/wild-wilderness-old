package com.wildernesswild.wildernesswild.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Account {

    @GeneratedValue
    @Id
    private Long id;

    private String username;
    private String password;
    private String fullName;
    private String profilePicture;
    private boolean serverSideStatus;


    protected Account() {

    }
    public Account(String username, String password, String fullName, String profilePicture, boolean serverSideStatus) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.profilePicture = profilePicture;
        this.serverSideStatus = serverSideStatus;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getFullName() {
        return fullName;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public boolean isServerSideStatus() {
        return serverSideStatus;
    }

    public void setServerSideStatus(boolean serverSideStatus) {
        this.serverSideStatus = serverSideStatus;
    }

    @Override
    public String toString() {
        return "Account{ " + "username= ' " + username + '\'' + ", password= ' " + password + '\'' + ", fullName= ' " + fullName + '\'' + ", profilePicture= ' " + profilePicture + '\'' + ", serverSideStatus=" + serverSideStatus + '}';
    }
}
