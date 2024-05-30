package com.SSO.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.SSO.bean.CustomUserDetailsProvider;
import com.SSO.bean.SSO;
import com.SSO.repo.SSOrepo;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private SSOrepo FSPRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		SSO user = FSPRepository.findByName(username);
		System.out.println("loadUserbyUsername: " + user.getName());
		if (user == null) {

			throw new UsernameNotFoundException("could not found user..!!");
		}

		return new CustomUserDetailsProvider(user);
	}
}
