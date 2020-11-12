package com.renato.softperson.services.validation;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.renato.softperson.dto.PersonDTO;
import com.renato.softperson.entities.Person;
import com.renato.softperson.repositories.PersonRepository;
import com.renato.softperson.resources.exception.FieldMessage;

public class PersonInsertValidator implements ConstraintValidator<PersonInsertValid, PersonDTO> {
	
	@Autowired
	private PersonRepository repository;
	
	@Override
	public void initialize(PersonInsertValid ann) {
	}

	@Override
	public boolean isValid(PersonDTO dto, ConstraintValidatorContext context) {
		
		List<FieldMessage> list = new ArrayList<>();
		
		Person person = repository.findByEmail(dto.getEmail());
		if (person != null) {
			list.add(new FieldMessage("email", "Email já Existe"));
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
