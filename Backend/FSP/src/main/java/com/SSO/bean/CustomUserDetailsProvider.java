package com.SSO.bean;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class CustomUserDetailsProvider extends SSO implements UserDetails {
	private String customUsername;
	private String customPassword;
	Collection<? extends GrantedAuthority> authorities;

	public CustomUserDetailsProvider(SSO byUsername) {
		this.customUsername = byUsername.getName();
		this.customPassword = byUsername.getPassword();
		List<GrantedAuthority> auths = new ArrayList<>();
		System.out.println(byUsername.getName());
		auths.add(new SimpleGrantedAuthority(byUsername.getName().toUpperCase()));
		this.authorities = auths;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return customPassword;
	}

	@Override
	public String getUsername() {
		return customUsername;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}