package com.renato.softperson.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.renato.softperson.dto.PersonDTO;
import com.renato.softperson.dto.PersonInsertDTO;
import com.renato.softperson.dto.PersonUpdateDTO;
import com.renato.softperson.services.PersonService;

@RestController
@RequestMapping(value = "/persons")
public class PersonResource {

	@Autowired
	private PersonService service;
		
	@GetMapping(value = "/{id}")
	public ResponseEntity<PersonDTO> findPerson(@PathVariable Long id) {
		PersonDTO dto = service.find(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@GetMapping(value = "/name/{name}")
	public ResponseEntity<PersonDTO> searchPerson(@PathVariable String name){
		PersonDTO dto = service.search(name);
		return ResponseEntity.ok().body(dto);
	}
	
	
	
	@GetMapping
	public ResponseEntity<Page<PersonDTO>> findallPaged(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy ){
		
		PageRequest pegaRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<PersonDTO> list = service.findAllPersons(pegaRequest);
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<PersonDTO> insert(@Valid @RequestBody PersonInsertDTO dto) {
		PersonDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<PersonDTO> update(@PathVariable Long id,@Valid @RequestBody PersonUpdateDTO dto){
		PersonDTO newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<PersonDTO> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
