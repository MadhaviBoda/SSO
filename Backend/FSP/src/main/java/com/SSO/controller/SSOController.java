package com.SSO.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SSO.Jwt.JwtTokenProvider;
import com.SSO.bean.SSO;
import com.SSO.dto.ForgetPasswordDTO;
import com.SSO.dto.LoginDTO;
import com.SSO.repo.SSOrepo;
import com.SSO.service.SSOservice;
import com.SSO.service.UserDetailsServiceImpl;

@RestController

public class SSOController {

	private SSOservice userService;
	private UserDetailsServiceImpl userDetailsService;
	private JwtTokenProvider jwtTokenProvider;
	private SSOrepo FSPrepo;

	@Autowired
	public SSOController(SSOservice userService, UserDetailsServiceImpl userDetailsService,
			JwtTokenProvider jwtTokenProvider, SSOrepo FSPrepo) {
		this.userService = userService;
		this.userDetailsService = userDetailsService;
		this.jwtTokenProvider = jwtTokenProvider;
		this.FSPrepo = FSPrepo;
	}

	@GetMapping("/WELCOME")
	public String Hello() {
		return "Hello World";
	}

	@PreAuthorize("hasAuthority('MADHAVI')")
	// @PreAuthorize("hasAuthority('VENKATESH')")
	@GetMapping("/pass")
	public String pass() {
		return "User Secured Page";
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody SSO loginRequest) {
		if (userService.authenticate(loginRequest.getName(), loginRequest.getPassword())) {
			UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getName());
			System.out.println("user details: " + userDetails.getUsername());
			String token = jwtTokenProvider.GenerateToken(userDetails.getUsername());
			LoginDTO logindto = new LoginDTO();
			logindto.setName(userDetails.getUsername());
			String role = userDetails.getAuthorities().toString();
			role = role.substring(1, role.length() - 1);
			logindto.setRole(role);
			logindto.setToken(token);
			return ResponseEntity.ok(logindto);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
		}
	}

	@PostMapping("/adduser")
	public SSO add(@RequestBody SSO user) {
		return userService.addnew(user);
	}

	@PostMapping("/forget-password")
	public ResponseEntity<?> forgetPassword(@RequestBody ForgetPasswordDTO forgetPasswordDTO) {
		return userService.forgetPassword(forgetPasswordDTO);
	}

}
