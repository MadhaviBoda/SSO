package com.SSO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class SSOApplication {

	public static void main(String[] args) {
		SpringApplication.run(SSOApplication.class, args);
	}

}
