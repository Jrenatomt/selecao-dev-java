package com.renato.softperson.dto;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.renato.softperson.entities.Person;

public class PersonDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@NotBlank(message = "Preenchimento Obrigatório")
	@Length(min = 2, max = 120, message="O tamanho deve ser entre 2 e 120 caracteres")
	private String name;
	
	private String gender;
	
	@Email(message = "digite um email válido")
	private String email;

	@PastOrPresent(message = "A data não pode ser do futuro")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date birthDate;
	
	private String city;
	private String coutry;
	
	@CPF
	private String cpf;
	
	public PersonDTO() {
	}

	public PersonDTO(Long id, String name, String gender, String email, Date birthDate, String city, String coutry, String cpf) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.email = email;
		this.birthDate = birthDate;
		this.city = city;
		this.coutry = coutry;
		this.cpf = cpf;
	}
	
	public PersonDTO(Person entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.gender = entity.getGender();
		this.email = entity.getEmail();
		this.birthDate = entity.getBirthDate();
		this.city = entity.getCity();
		this.coutry = entity.getCoutry();
		this.cpf = entity.getCpf();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCoutry() {
		return coutry;
	}

	public void setCoutry(String coutry) {
		this.coutry = coutry;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
}
