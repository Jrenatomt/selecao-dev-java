package com.renato.softperson.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renato.softperson.entities.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
	
	Person findByEmail(String email);
	Person findByCpf(String cpf);
	Optional<Person> findByNameIgnoreCase(String name);

}
