package com.renato.softperson.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.renato.softperson.dto.PersonDTO;
import com.renato.softperson.entities.Person;
import com.renato.softperson.repositories.PersonRepository;
import com.renato.softperson.services.exception.ResourceNotFoundException;

@Service
public class PersonService {
	
	@Autowired
	private PersonRepository repository;
	
	@Transactional(readOnly = true)
	public PersonDTO find(Long id) {
		Optional<Person> person = repository.findById(id);
		Person entity = person.orElseThrow( () -> new ResourceNotFoundException("Resource not found"));
		return new PersonDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<PersonDTO> findAllPersons(PageRequest pageRequest){
		Page<Person> person = repository.findAll(pageRequest);
		return person.map( x -> new PersonDTO(x));
	}
	
	@Transactional
	public PersonDTO insert(PersonDTO dto) {
		Person entity = new Person();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PersonDTO(entity);
	}

	@Transactional
	public PersonDTO update(Long id, PersonDTO dto) {
		try {
			 Person entity = repository.getOne(id);
			 copyDtoToEntity(dto, entity);
			 entity = repository.save(entity);
			 return new PersonDTO(entity);
			}
		     catch(EntityNotFoundException e) {
		    	throw new ResourceNotFoundException("Resource not found");
		     }
       }

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Resource not found");
	}
		}
	
	private void copyDtoToEntity(PersonDTO dto, Person entity) {
		entity.setName(dto.getName());
		entity.setGender(dto.getGender());
		entity.setEmail(dto.getEmail());
		entity.setBirthDate(dto.getBirthDate());
		entity.setCity(dto.getCity());
		entity.setCoutry(dto.getCoutry());
		entity.setCpf(dto.getCpf());
		}
}
