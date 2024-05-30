//package com.FSP.repo;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.FSP.bean.FSP;
//import com.FSP.dto.ForgetPasswordDTO;
//@Repository
//public interface FSPrepo extends JpaRepository<FSP, Integer> {
//	FSP  findByName(String name);
//ForgetPasswordDTO findByUsername(String username); 
//}

package com.SSO.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SSO.bean.SSO;

@Repository
public interface SSOrepo extends JpaRepository<SSO, Integer> {
	SSO findByName(String name);
}
