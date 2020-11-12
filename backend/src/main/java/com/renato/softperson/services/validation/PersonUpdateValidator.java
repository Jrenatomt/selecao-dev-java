package com.renato.softperson.services.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import com.renato.softperson.dto.PersonUpdateDTO;
import com.renato.softperson.entities.Person;
import com.renato.softperson.repositories.PersonRepository;
import com.renato.softperson.resources.exception.FieldMessage;

public class PersonUpdateValidator implements ConstraintValidator<PersonUpdateValid, PersonUpdateDTO> {
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private PersonRepository repository;
	
	@Override
	public void initialize(PersonUpdateValid ann) {
	}

	@Override
	public boolean isValid(PersonUpdateDTO dto, ConstraintValidatorContext context) {
		
		@SuppressWarnings("unchecked")
		var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
		Long personId = Long.parseLong(uriVars.get("id"));
		
		List<FieldMessage> list = new ArrayList<>();
		
		Person person = repository.findByEmail(dto.getEmail());
		
		if (person != null && personId != person.getId()) {
			list.add(new FieldMessage("email", "Email Existente"));
			
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}