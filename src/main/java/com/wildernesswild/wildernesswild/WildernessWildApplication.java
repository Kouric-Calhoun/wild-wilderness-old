package com.wildernesswild.wildernesswild;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WildernessWildApplication {

	public static void main(String[] args) {
		SpringApplication.run(WildernessWildApplication.class, args);

		System.out.println("Server Side is wired up!");
	}

}
