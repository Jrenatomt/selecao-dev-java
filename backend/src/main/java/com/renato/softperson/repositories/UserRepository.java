package com.renato.softperson.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renato.softperson.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}
