package com.SSO.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.SSO.bean.SSO;
import com.SSO.dto.ForgetPasswordDTO;
import com.SSO.repo.SSOrepo;

@Service
public class SSOservice {

	@Autowired
	private SSOrepo FSPrepository;

	public boolean authenticate(String username, String password) {
		System.out.println(username);
		SSO user = FSPrepository.findByName(username);
		if (user != null && password.equals(user.getPassword())) {
			return true;
		}
		return false;
	}

	public SSO addnew(SSO user) {
		return FSPrepository.save(user);
	}

	public ResponseEntity<?> forgetPassword(ForgetPasswordDTO forgetPasswordDTO) {
		SSO user = FSPrepository.findByName(forgetPasswordDTO.getUsername());
		if (user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}

		// Generate a random token (or use UUID)
		String resetToken = java.util.UUID.randomUUID().toString();

		// Save the reset token (this could be saved in the database or used as part of
		// the URL)
		// For simplicity, we are not saving it here

		// You can perform other operations here, such as sending an email with the
		// resetToken

		return ResponseEntity.ok("Reset token generated for user: " + user.getName());
	}
}
