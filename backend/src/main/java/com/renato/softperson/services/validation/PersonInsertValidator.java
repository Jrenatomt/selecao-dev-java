package com.renato.softperson.services.validation;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.renato.softperson.dto.PersonInsertDTO;
import com.renato.softperson.entities.Person;
import com.renato.softperson.repositories.PersonRepository;
import com.renato.softperson.resources.exception.FieldMessage;

public class PersonInsertValidator implements ConstraintValidator<PersonInsertValid, PersonInsertDTO> {

	@Autowired
	private PersonRepository repository;

	@Override
	public void initialize(PersonInsertValid ann) {
	}

	@Override
	public boolean isValid(PersonInsertDTO dto, ConstraintValidatorContext context) {

		List<FieldMessage> list = new ArrayList<>();

		Person person = repository.findByEmail(dto.getEmail());
		Person obj = repository.findByCpf(dto.getCpf());

		if (person != null) {
			list.add(new FieldMessage("email", "Email já Existe"));
		}
		if (obj != null) {
			list.add(new FieldMessage("cpf", "cpf ja existe"));
		}
		if (dto.getCpf() == "") {
			list.add(new FieldMessage("cpf", "Campo Obrigatorio"));
		}
		
		if (dto.getBirthDate() == null) {
			list.add(new FieldMessage("birthDate", "Campo Obrigatorio"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}